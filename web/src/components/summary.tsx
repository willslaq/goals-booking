import { CheckCircle2, Plus } from "lucide-react";
import { Button } from "./ui/button";
import { DialogTrigger } from "./ui/dialog";
import { InOrbitIcon } from "./ui/icons/in-orbit-icon";
import { Progress, ProgressIndicator } from "./ui/progress-bar";
import { Separator } from "./ui/separator";
import { OutlineButton } from "./ui/outline-button";

export function Summary() {
  const values = { max: 12, value: 6 };
  const goalsPercentage = (values.value / values.max) * 100;

  return (
    <div className="py-10 max-w-[480px] px-5 mx-auto flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <InOrbitIcon />
          <span className="text-lg font-semibold">5 a 10 de Agosto</span>
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

        <div className="flex flex-wrap gap-3">
          <OutlineButton>
            <Plus className="size-4 text-zinc-600" />
            Meditar
          </OutlineButton>
          <OutlineButton>
            <Plus className="size-4 text-zinc-600" />
            Nadar
          </OutlineButton>
          <OutlineButton>
            <Plus className="size-4 text-zinc-600" />
            Praticar Exercício
          </OutlineButton>
          <OutlineButton>
            <Plus className="size-4 text-zinc-600" />
            Praticar Exercício
          </OutlineButton>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-medium">Sua semana</h2>
          <div className="flex flex-col gap-4">
            <h3 className="font-medium">
              Doming{" "}
              <span className="text-zinc-400 text-xs">(10 de Agosto)</span>
            </h3>

            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-pink-500" />
                <span className="text-sm text-zinc-400">
                  Você completou "
                  <span className="text-zinc-100">Acordar cedo</span>" às{" "}
                  <span className="text-zinc-100">08:13h</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
