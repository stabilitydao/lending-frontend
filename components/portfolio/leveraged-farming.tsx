import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
export const LeveragedFarming = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <p className="text-xl">Leveraged Farming</p>
          <div className="flex items-center justify-center gap-4 text-sm font-normal">
            <p>
              Net Value: <span className="px-1 font-semibold">$-1024.10</span>
            </p>
            <p>
              Total Collateroal:{" "}
              <span className="px-1 font-semibold">$0.00</span>
            </p>
            <p>
              Total Debt: <span className="px-1 font-semibold">$1582.93</span>
            </p>
            <p>
              Total Interest:{" "}
              <span className="px-1 font-semibold text-success">$7.01</span>
            </p>
          </div>
        </CardTitle>
        <Separator />
      </CardHeader>
      <CardContent>
        <p>Leveraged Farming</p>
      </CardContent>
    </Card>
  );
};
