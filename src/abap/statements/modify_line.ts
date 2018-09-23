import {Statement} from "./statement";
import {str, seq, alt, opt, per, plus, IRunnable} from "../combi";
import {Source} from "../expressions";

export class ModifyLine extends Statement {

  public static get_matcher(): IRunnable {

    let form = seq(alt(str("INVERSE"), str("INPUT")),
                   str("="),
                   new Source());

    let value = seq(str("FIELD VALUE"), plus(new Source()));
    let format = seq(str("FIELD FORMAT"), new Source(), opt(form));
    let from = seq(str("FROM"), new Source());
    let lineValue = seq(str("LINE VALUE FROM"), new Source());
    let index = seq(str("INDEX"), new Source());
    let page = seq(str("OF PAGE"), new Source());
    let ocp = str("OF CURRENT PAGE");
    let lineFormat = str("LINE FORMAT INPUT OFF");
    let intensified = str("INTENSIFIED ON");

    let options = per(index, value, from, format, page, lineFormat, lineValue, ocp, intensified);

    let ret = seq(str("MODIFY"),
                  alt(str("CURRENT LINE"),
                      seq(str("LINE"), new Source())),
                  opt(options));

    return ret;
  }

}