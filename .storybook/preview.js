import { applyGlobalStyles } from "@cy7/design-system";
import typography from "@cy7/typography";

// TODO: It's potentially a little hacky to run these side effects during
//       import phase. But using a global decorator means global styles don't
//       get injected on pure docs pages: doing it this way produces a more
//       consistent result across different types of doc page.
applyGlobalStyles();
typography.injectStyles();
