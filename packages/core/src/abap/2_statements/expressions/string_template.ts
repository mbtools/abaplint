import {tok, ver, seq, starPrio, altPrio, Expression, optPrio} from "../combi";
import * as Tokens from "../../1_lexer/tokens";
import {Version} from "../../../version";
import {Source, StringTemplateFormatting} from ".";
import {IStatementRunnable} from "../statement_runnable";

export class StringTemplate extends Expression {
  public getRunnable(): IStatementRunnable {

    const nest = seq(tok(Tokens.StringTemplateBegin),
                     Source,
                     optPrio(StringTemplateFormatting),
                     starPrio(seq(tok(Tokens.StringTemplateMiddle), Source, optPrio(StringTemplateFormatting))),
                     tok(Tokens.StringTemplateEnd));

    return ver(Version.v702, altPrio(nest, tok(Tokens.StringTemplate)));
  }
}