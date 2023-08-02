import {
  BaseFilter,
  DduItem,
  SourceOptions,
} from "https://deno.land/x/ddu_vim@v3.4.4/types.ts";
import { Denops } from "https://deno.land/x/ddu_vim@v3.4.4/deps.ts";

type Params = Record<never, never>;

export class Filter extends BaseFilter<Params> {
  override filter(args: {
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

  override params(): Params {
    return {};
  }
}
