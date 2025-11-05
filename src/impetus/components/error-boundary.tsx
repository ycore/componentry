import { Button } from '@ycore/componentry/vibrant';
import { href, isRouteErrorResponse, Link, useRouteError } from 'react-router';

type ErrorDisplayProps = {
  message: string;
  detail: string;
};

export type ErrorAction = {
  label: string;
  to: string;
  variant?: 'default' | 'outline';
};

type ErrorActionsProps = {
  actions?: ErrorAction[];
};

type ErrorDevDetailsProps = {
  message: string;
  stack?: string;
};

type ErrorMessageProps = {
  status?: number;
  message: string;
  detail: string;
};

type ErrorLayoutProps = {
  renderDocument?: boolean;
  status?: number;
  message: string;
  children: React.ReactNode;
};

export type GeneralErrorBoundaryProps = {
  isDev?: boolean;
  renderDocument?: boolean;
  actions?: ErrorAction[];
};

const HTTP_ERROR_CONFIG: Record<number, ErrorDisplayProps> = {
  400: {
    message: '400 Bad Request',
    detail: 'The request was invalid.',
  },
  401: {
    message: '401 Unauthorized Access',
    detail: 'Please sign in with the appropriate credentials to access.',
  },
  403: {
    message: '403 Access Forbidden',
    detail: 'Access permission is not sufficient.',
  },
  404: {
    message: '404 Not Found',
    detail: 'The page does not exist.',
  },
  500: {
    message: '500 Internal Server Error',
    detail: 'We apologize for the inconvenience. Please try again later.',
  },
  503: {
    message: '503 Website is under maintenance!',
    detail: "The site is not available at the moment. We'll be back online shortly.",
  },
};

const DEFAULT_ERROR = {
  message: 'Oops, something went wrong.',
  detail: 'Unexpected error. Refresh to try again or contact support if the issue persists.',
};

/**
 * DevErrorDisplay - Internal development error display (simple format)
 * Used by GeneralErrorBoundary when isDev=true and error is Error instance
 */
function DevErrorDisplay({ message, detail, stack }: ErrorDisplayProps & { stack?: string }) {
  return (
    <main className="container mx-auto space-y-4 p-4 pt-16">
      <div className="space-y-1">
        <h1 className="font-semibold text-lg">{message}</h1>
        <p className="text-base text-muted-foreground">{detail}</p>
      </div>
      {stack && (
        <pre className="w-full overflow-x-auto rounded-lg bg-destructive/10 p-4 text-destructive text-sm">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}

function getErrorInfo(error: unknown): ErrorDisplayProps {
  if (!isRouteErrorResponse(error)) {
    return DEFAULT_ERROR;
  }

  const httpError = HTTP_ERROR_CONFIG[error.status];

  return {
    message: error.data?.message ?? httpError?.message ?? DEFAULT_ERROR.message,
    detail: error.data?.detail ?? httpError?.detail ?? DEFAULT_ERROR.detail,
  };
}

/**
 * Utility: Get error title based on HTTP status code
 */
export function getErrorTitle(status: number): string {
  const config = HTTP_ERROR_CONFIG[status];
  return config?.message ?? DEFAULT_ERROR.message;
}

/**
 * Utility: Get error message based on HTTP status code
 */
export function getErrorMessage(status: number): string {
  const config = HTTP_ERROR_CONFIG[status];
  return config?.detail ?? DEFAULT_ERROR.detail;
}

export function ErrorActions({ actions }: ErrorActionsProps): React.JSX.Element {
  const defaultActions: ErrorAction[] = [{ label: 'Back to home', to: '/' }];
  const actionsList = actions ?? defaultActions;

  return (
    <div className="flex justify-center gap-4">
      {actionsList.map((action, index) => (
        <Button key={index} asChild size="lg" variant={action.variant}>
          <Link to={href(action.to)}>{action.label}</Link>
        </Button>
      ))}
    </div>
  );
}

export function ErrorDevDetails({ message, stack }: ErrorDevDetailsProps): React.JSX.Element {
  return (
    <details className="mt-8 rounded-lg border border-border bg-muted p-6 text-left">
      <summary className="cursor-pointer font-medium text-foreground text-lg">Error Details (Development Only)</summary>
      <div className="mt-4 space-y-4">
        <div>
          <h3 className="font-semibold text-foreground">Message:</h3>
          <p className="text-muted-foreground text-sm">{message}</p>
        </div>
        {stack && (
          <div>
            <h3 className="font-semibold text-foreground">Stack Trace:</h3>
            <pre className="mt-2 overflow-auto rounded bg-background p-4 text-muted-foreground text-xs">{stack}</pre>
          </div>
        )}
      </div>
    </details>
  );
}

export function ErrorMessage({ status, message, detail }: ErrorMessageProps): React.JSX.Element {
  return (
    <div className="space-y-2">
      {status && <h1 className="font-bold text-8xl text-primary">{status}</h1>}
      {!status && <h1 className="font-bold text-8xl text-destructive">Error</h1>}
      <h2 className="font-semibold text-3xl text-foreground">{message}</h2>
      <p className="text-lg text-muted-foreground">{detail}</p>
    </div>
  );
}

export function ErrorLayout({ renderDocument, status, message, children }: ErrorLayoutProps): React.JSX.Element {
  const content = (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="w-full max-w-2xl space-y-6 text-center">{children}</div>
    </div>
  );

  if (!renderDocument) {
    return content;
  }

  const title = status ? `${status} - ${message}` : 'Application Error';

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
      </head>
      <body>{content}</body>
    </html>
  );
}

/**
 * GeneralErrorBoundary - Configurable error boundary component
 */
export function GeneralErrorBoundary({ isDev = false, renderDocument = false, actions }: GeneralErrorBoundaryProps = {}): React.JSX.Element {
  const error = useRouteError();

  // Development error display (legacy simple format)
  if (isDev && error instanceof Error) {
    console.error('🔴 error on dev', error);
    return <DevErrorDisplay message="Application Error" detail={error.message} stack={error.stack} />;
  }

  // Get error info from RouteErrorResponse or default
  const { message, detail } = getErrorInfo(error);
  const status = isRouteErrorResponse(error) ? error.status : undefined;

  return (
    <ErrorLayout renderDocument={renderDocument} status={status} message={message}>
      <ErrorMessage status={status} message={message} detail={detail} />
      <ErrorActions actions={actions} />

      {isDev && error instanceof Error && <ErrorDevDetails message={error.message} stack={error.stack} />}
    </ErrorLayout>
  );
}
