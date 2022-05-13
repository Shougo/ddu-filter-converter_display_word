import {
  BaseFilter,
  DduItem,
  SourceOptions,
} from "https://deno.land/x/ddu_vim@v0.14/types.ts";
import { Denops } from "https://deno.land/x/ddu_vim@v0.14/deps.ts";

type Params = Record<never, never>;

export class Filter extends BaseFilter<Params> {
  async filter(args: {
    denops: Denops;
    sourceOptions: SourceOptions;
    input: string;
    items: DduItem[];
  }): Promise<DduItem[]> {
    for (const item of args.items) {
      if (item.display) {
        item.matcherKey = item.display;
      }
    }
    return Promise.resolve(args.items);
  }

  params(): Params {
    return {};
  }
}
