import { formatSuffix } from "@/helpers";

export const MoneyCard = ({
  title,
  amount,
}: {
  title: string;
  amount: number;
}) => (
  <Card title={title}>
    <div className="text-xl font-semibold">
      ${formatSuffix(amount, "money")}
    </div>
  </Card>
);

export const Card = ({
  title,
  children,
  width,
}: {
  title?: string;
  children: React.ReactNode;
  width?: string;
}) => (
  <div
    className={`${width} rounded-lg bg-card text-card-foreground shadow-xl p-[24px] flex flex-col gap-4 min-w-[172px] w-full sm:w-auto`}
  >
    {title && <div className="tracking-tight text-lg font-light">{title}</div>}
    {children}
  </div>
);
