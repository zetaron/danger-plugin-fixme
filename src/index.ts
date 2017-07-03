// Provides dev-time type structures for  `danger` - doesn't affect runtime.
import {DangerDSLType} from "../node_modules/danger/distribution/dsl/DangerDSL"
declare var danger: DangerDSLType
export declare function message(message: string): void
export declare function warn(message: string): void
export declare function fail(message: string): void
export declare function markdown(message: string): void

/**
 * Have danger fail if she detects a FIXME annotation inside your code.
 */
export default function fixme() {
  // Replace this with the code from your Dangerfile
  const title = danger.github.pr.title
  message(`PR Title: ${title}`)
}
