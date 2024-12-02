import { prisma } from '../../../lib/prisma';

export async function POST(req) {

    try {
        const { action, txHash, wallet_address, amount, currency, chain, option, ve_period, friendReferralCode } = await req.json();
        if (!action || !wallet_address) {
            return new Response(JSON.stringify({ error: "Action and wallet address are required." }), { status: 400 });
        }

        if (action === "assignReferralCode") {

            const { message, selfReferralCode } = await handleReferralCodeAssignment(wallet_address);
            return new Response(JSON.stringify({
                resultMessge: message,
                selfReferralCode: selfReferralCode
            }), { status: 200 });
        }

        if (action === "deposit") {

            if (!amount || !currency || option === undefined || ve_period === undefined) {
                return new Response(JSON.stringify({ error: "Amount, currency, chain, option, and ve_period are required for deposit." }), { status: 400 });
            }

            if (!txHash) {
                return new Response(JSON.stringify({ error: "Deposit Failed." }), { status: 400 });
            }

            const result = await deposit(txHash, wallet_address, amount, currency, chain, option, ve_period, friendReferralCode);
            return new Response(JSON.stringify(result), { status: 200 });
        }

        return new Response(JSON.stringify({ error: "Invalid action." }), { status: 400 });
    } catch (error) {
        return new Response(JSON.stringify({ error: "Invalid JSON in request body" }), { status: 400 });
    }
}

async function handleReferralCodeAssignment(walletAddress) {
    let user;

    try {
        user = await prisma.InvestorData.findUnique({
            where: { wallet_address: walletAddress }
        });
    } catch (error) {
        console.log("error == >", error);
    }


    if (!user) {
        // user create here
        const newUserData = {
            wallet_address: walletAddress,
            friendReferralCode: '',
            selfReferralCode: '',
        };

        // Create the new user
        try {
            await prisma.InvestorData.create({
                data: newUserData
            });
        } catch (error) {
            console.error("Error creating user:", error);
            return { error: "An error occurred while creating the user." };
        }
    }

    if (user.selfReferralCode === "") {
        let newCode = generateRandomCode(4);
        let referralExists;

        try {
            referralExists = await prisma.validReferralCode.findMany({
                where: { referralCode: newCode }
            });
        } catch (error) {
            console.log("error from find - ", error);
        }

        while (referralExists.length > 0) {
            newCode = generateRandomCode(4);
            referralExists = await prisma.validReferralCode.findMany({
                where: { referralCode: newCode }
            });
        }

        user.selfReferralCode = newCode;

        await prisma.InvestorData.update({
            where: { wallet_address: walletAddress },
            data: {
                selfReferralCode: newCode,
            }
        });

        await prisma.ValidReferralCode.create({
            data: {
                wallet_address: walletAddress,
                referralCode: newCode
            }
        });

        return { message: `Referral code ${newCode} assigned successfully.`, selfReferralCode: newCode };
    } else {
        return { message: "You already have a referral code assigned.", selfReferralCode: user.selfReferralCode };
    }
}

async function deposit(txHash, walletAddress, amount, currency, chain, option, ve_period, friendReferralCode) {
    let user;

    console.log("wallet", walletAddress);
    if (friendReferralCode != "") {
        let { _, isValidReferralCode } = verifyFriendReferralCode(walletAddress, friendReferralCode);
        if (!isValidReferralCode) {
            // return { error: "Invalid referral code!" };
            friendReferralCode = "";
        }
    }
    try {
        user = await prisma.InvestorData.findUnique({
            where: { wallet_address: walletAddress }
        });
    } catch (error) {
        console.error("Error searching user:", error);
        return { error: "An error occurred while searching the user." };
    }

    // If user doesn't exist, create a new one
    if (!user) {
        const newUserData = {
            wallet_address: walletAddress,
            friendReferralCode: friendReferralCode,
            selfReferralCode: '', // Add default for missing selfReferralCode
        };
        try {
            // Create the new user with the deposit
            user = await prisma.InvestorData.create({
                data: newUserData
            });
        } catch (error) {
            console.error("Error creating user:", error);
            return { error: "An error occurred while creating the user." };
        }
    } else {
        // user update with friendReferral code
        await prisma.InvestorData.update({
            where: { wallet_address: walletAddress },
            data: {
                friendReferralCode: friendReferralCode,
            }
        });
    }

    const newInvestData = {
        tx_hash: txHash,
        wallet_address: walletAddress,
        option: option,
        ve_period: option == 1 ? 7 : ve_period,
        currency: currency,
        chain: chain,
        amount: amount,
    };

    // Create the invest data
    try {
        user = await prisma.PresaleInvestData.create({
            data: newInvestData
        });

        return { message: `Deposited ${amount} ${currency}.` };
    } catch (error) {
        console.error("Error deposit:", error);
        return { error: "An error occurred while depositing." };
    }
}

// Helper function to generate a 4-digit alphanumeric code
function generateRandomCode(length) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return result;
}

/// get functions

export async function GET(req) {
    try {
        const url = new URL(req.url);
        const action = url.searchParams.get('action');
        const walletAddress = url.searchParams.get('wallet_address');
        const _friendReferralCode = url.searchParams.get("friendReferralCode");

        if (action === 'userInfo') {
            if (!walletAddress) {
                return new Response(JSON.stringify({ error: "Wallet address is required." }), { status: 400 });
            }
            const result = await getUserInfo(walletAddress);
            return new Response(JSON.stringify(result), { status: 200 });
        }

        if (action === 'verifyFriendReferralCode') {
            const { result, isValid } = await verifyFriendReferralCode(walletAddress, _friendReferralCode);
            return new Response(JSON.stringify({
                resultMessge: result,
                isValid: isValid
            }), { status: 200 });
        }

        if (action === "getAllInvestData") {
            const result = await getAllInvestData();
            return new Response(JSON.stringify(result), { status: 200 });
        }

        if (action === "getSelfReferralCodeByWallet") {
            const { message, code } = await getSelfReferralCodeByWallet(walletAddress);
            return new Response(JSON.stringify({
                resultMessage: message,
                selfReferralCode: code
            }), { status: 200 });
        }

        if (action === "getValidReferralCodeList") {
            const { resultMessage, referralCodeList } = await getValidReferralCodeList();
            return new Response(JSON.stringify({
                resultMessage: resultMessage,
                codeList: referralCodeList
            }), { status: 200 });
        }

        return new Response(JSON.stringify({ error: "Invalid action." }), { status: 400 });
    } catch (error) {
        return new Response(JSON.stringify({ error: "An error occurred while processing the request." }), { status: 500 });
    }
}

async function getUserInfo(walletAddress) {
    try {
        console.log(walletAddress);

        const user = await prisma.InvestorData.findUnique({
            where: { wallet_address: walletAddress }
        });

        if (!user) {
            return { error: "User not found." };
        }

        const userInvestData = await prisma.PresaleInvestData.findMany({
            where: { wallet_address: walletAddress }
        })

        return {
            wallet_address: user.wallet_address,
            friendReferralCode: user.friendReferralCode,
            selfReferralCode: user.selfReferralCode,
            investData: userInvestData
        };
    } catch (error) {
        console.error("Error retrieving user info:", error);
        return { error: "An error occurred while retrieving user information." };
    }
}

async function getAllInvestData() {

    try {
        const investorData = await prisma.InvestorData.findMany();

        const presaleInvestData = await prisma.PresaleInvestData.findMany({
            where: {
                wallet_address: {
                    in: investorData.map(investor => investor.wallet_address),
                },
            },
        });

        const combinedData = investorData.map(investor => {
            const presaleData = presaleInvestData.filter(data => data.wallet_address === investor.wallet_address);
            return {
                ...investor,
                presaleInvestments: presaleData,
            };
        });

        return combinedData;
    } catch (error) {
        console.error("Error fetching combined investment data:", error);
        throw new Error("Unable to retrieve combined investment data.");
    }
}

async function verifyFriendReferralCode(walletAddress, _friendReferralCode) {
    let isValidReferralCode = false;
    try {
        const user = await prisma.InvestorData.findUnique({
            where: { wallet_address: walletAddress }
        });

        let referralExists = await prisma.validReferralCode.findMany({
            where: { referralCode: _friendReferralCode }
        });

        if (referralExists.length > 0 && user.selfReferralCode != _friendReferralCode) {
            isValidReferralCode = true;
            return { result: "Referral code verified!", isValid: isValidReferralCode };
        } else if (user.selfReferralCode == _friendReferralCode) {
            isValidReferralCode = false;
            return { result: "Self referral isn't allowed!", isValid: isValidReferralCode };
        } else {
            isValidReferralCode = false;
            return { result: "Invalid ref code!", isValid: isValidReferralCode };
        }
    } catch (error) {
        console.error("Error retrieving referral code:", error);
        return { result: "An error occurred while retrieving the referral code.", isValidReferralCode };
    }
}

async function getSelfReferralCodeByWallet(walletAddress) {
    let code = "";

    try {
        let referralData = await prisma.validReferralCode.findUnique({
            where: { wallet_address: walletAddress }
        });

        if (referralData.referralCode != "") {
            code = referralData.referralCode;
            return { resultMessage: "Referral code is exist", code };
        } else {
            return { resultMessage: "Referral code is invalid!", code };
        }
    } catch (error) {
        return { resultMessage: "An error occurred while retrieving the referral code.", code };
    }
}

async function getValidReferralCodeList() {
    let referralCodeList = [];

    try {
        referralCodeList = await prisma.validReferralCode.findMany();
        return { resultMessage: "Referral code is exist", referralCodeList };
    } catch (error) {
        return { resultMessage: "An error occurred while retrieving the referral code.", referralCodeList };
    }
}
