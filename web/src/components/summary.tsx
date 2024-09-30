import { CheckCircle2, Plus } from "lucide-react";
import { Button } from "./ui/button";
import { DialogTrigger } from "./ui/dialog";
import { InOrbitIcon } from "./ui/icons/in-orbit-icon";
import { Progress, ProgressIndicator } from "./ui/progress-bar";
import { Separator } from "./ui/separator";
import { getSummary } from "../http/get-summary";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import ptBR from "dayjs/locale/pt-BR";
import { PendingGoals } from "./pending-goals";

dayjs.locale(ptBR);

export function Summary() {
  const { data } = useQuery({
    queryKey: ["summary"],
    queryFn: getSummary,
    staleTime: 1000 * 60,
  });

  let goalsPercentage = 0;
  let values = { max: 0, value: 0 };
  if (data) values = { max: data.total, value: data.completed };

  goalsPercentage = Number(((values.value / values.max) * 100).toFixed(2));

  const firstDayOfWeek = dayjs().startOf("week").format("D MMM");
  const lastDayOfWeek = dayjs().endOf("week").format("D MMM");

  return (
    <div className="py-10 max-w-[480px] px-5 mx-auto flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <InOrbitIcon />
          <span className="text-lg font-semibold">
            <span className="capitalize">{firstDayOfWeek} </span>à
            <span className="capitalize"> {lastDayOfWeek}</span>
          </span>
        </div>
        <DialogTrigger>
          <Button size="sm">
            <Plus className="size-4" />
            Cadastrar meta
          </Button>
        </DialogTrigger>
      </div>

      <div className="flex flex-col gap-3">
        <Progress max={values.max} value={values.value}>
          <ProgressIndicator style={{ width: `${goalsPercentage}%` }} />
        </Progress>

        <div className="flex items-center justify-between text-xs text-zinc-400">
          <span>
            Você completou <span className="text-zinc-100">{values.value}</span>
            de <span className="text-zinc-100">{values.max} </span>
            metas nessa semana.
          </span>
          <span>{goalsPercentage}%</span>
        </div>

        <Separator />

        <PendingGoals />

        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-medium">Sua semana</h2>

          {data &&
            Object.entries(data.goalsPerDay).map(([date, goals]) => {
              const weekDay = dayjs(date).format("dddd");
              const formattedDate = dayjs(date).format("D[ de ]MMMM");

              return (
                <div key={date} className="flex flex-col gap-4">
                  <h3 className="font-medium ">
                    <span className="capitalize">{weekDay}</span>
                    <span className="text-zinc-400 text-xs">
                      ({formattedDate})
                    </span>
                  </h3>

                  <ul className="flex flex-col gap-3">
                    {goals.map((goal) => {
                      const time = dayjs(goal.completedAt).format("HH:mm");

                      return (
                        <li key={goal.id} className="flex items-center gap-2">
                          <CheckCircle2 className="size-4 text-pink-500" />
                          <span className="text-sm text-zinc-400">
                            Você completou "
                            <span className="text-zinc-100">{goal.title}</span>"
                            às <span className="text-zinc-100">{time}h</span>
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
