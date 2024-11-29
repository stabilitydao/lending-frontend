-- CreateTable
CREATE TABLE "PresaleInvestData" (
    "id" SERIAL NOT NULL,
    "tx_hash" TEXT NOT NULL,
    "wallet_address" TEXT NOT NULL,
    "option" INTEGER NOT NULL,
    "ve_period" INTEGER NOT NULL,
    "currency" TEXT NOT NULL,
    "chain" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "PresaleInvestData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ValidReferralCode" (
    "id" SERIAL NOT NULL,
    "wallet_address" TEXT NOT NULL,
    "referralCode" TEXT NOT NULL,

    CONSTRAINT "ValidReferralCode_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InvestorData" (
    "id" SERIAL NOT NULL,
    "wallet_address" TEXT NOT NULL,
    "selfReferralCode" TEXT NOT NULL,
    "friendReferralCode" TEXT NOT NULL,

    CONSTRAINT "InvestorData_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PresaleInvestData_tx_hash_key" ON "PresaleInvestData"("tx_hash");

-- CreateIndex
CREATE UNIQUE INDEX "ValidReferralCode_wallet_address_key" ON "ValidReferralCode"("wallet_address");

-- CreateIndex
CREATE UNIQUE INDEX "InvestorData_wallet_address_key" ON "InvestorData"("wallet_address");
