import React from "react";

function OldBrowserWarning() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .old-browser-warning {
          background-color: hsl(51, 100%, 50%);
          color: hsl(213, 64%, 14%);
          display: block;
          padding: 20px 18px;
          text-align: center;
        }

        .old-browser-warning-text {
          margin: auto;
          max-width: 80ch;
        }

        @supports (display: grid) {
          .old-browser-warning {
            display: none;
          }
        }
      `
        }}
      />
      <div className="old-browser-warning">
        <p className="old-browser-warning-text">
          Your web browser is outdated and isn&apos;t supported by this website.
          Things might look a little broken.{" "}
          <strong>
            Read more about upgrading to a modern browser at{" "}
            <a
              href="https://browsehappy.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              browsehappy.com
            </a>{" "}
            (I recommend Firefox!)
          </strong>
        </p>
      </div>
    </>
  );
}

export { OldBrowserWarning };
