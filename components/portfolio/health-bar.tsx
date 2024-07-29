import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { InfoTooltip } from "@/components/ui/info-tooltip";

export const HealthBar = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-1">
          Health Bar
          <InfoTooltip>Track the health of your portfolio.</InfoTooltip>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Progress value={50} percentageIndicator={true} />
      </CardContent>
    </Card>
  );
};
