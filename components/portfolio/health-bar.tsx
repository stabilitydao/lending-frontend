import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export const HealthBar = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Health Bar</CardTitle>
      </CardHeader>
      <CardContent>
        <Progress value={50} />
      </CardContent>
    </Card>
  );
};
