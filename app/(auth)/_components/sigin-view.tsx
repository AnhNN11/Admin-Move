import { Metadata } from 'next';
import Link from 'next/link';
import UserAuthForm from './user-auth-form';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Authentication',
  description: 'Authentication forms built using the components.'
};

export default function SignInViewPage() {
  return (
    <div className="relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <Link
        href="/examples/authentication"
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          'absolute right-4 top-4 hidden md:right-8 md:top-8'
        )}
      >
        Login
      </Link>
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="110.315"
            height="24"
            viewBox="0 0 110.315 24"
          >
            <g id="Logo" transform="translate(-323.001 -128)">
              <g
                id="Group_4029"
                data-name="Group 4029"
                transform="translate(97.615 -49.2)"
              >
                <g
                  id="Group_2014"
                  data-name="Group 2014"
                  transform="translate(225.385 177.2)"
                >
                  <path
                    id="Path_651"
                    data-name="Path 651"
                    d="M279.531,178.235l-4.549,23.076h-3.405a2.164,2.164,0,0,1-2.124-2.579l1.871-9.585-7.681,9.89h-1.434a2.165,2.165,0,0,1-1.993-1.321l-3.628-8.569-2.439,12.164H250.24l4.615-23.076h3.214l5.407,13.351,9.4-11.971a3.61,3.61,0,0,1,2.84-1.381Z"
                    transform="translate(-239.15 -177.773)"
                    fill="#fff"
                  />
                  <path
                    id="Path_652"
                    data-name="Path 652"
                    d="M398.7,178.235l-14.473,23.076h-4.7a2.165,2.165,0,0,1-2.111-1.685l-3.857-16.982a3.61,3.61,0,0,1,3.521-4.41h2.17l3.3,15,8.367-13.311a3.61,3.61,0,0,1,3.057-1.689Z"
                    transform="translate(-307.394 -177.773)"
                    fill="#fff"
                  />
                  <path
                    id="Path_653"
                    data-name="Path 653"
                    d="M432.395,183.278l-.759,3.89h10.253l-.956,4.88H430.647l-.824,4.22h12.1l-1.055,5.043H425.013a2.165,2.165,0,0,1-2.123-2.589l3.517-17.585a3.61,3.61,0,0,1,3.54-2.9h15.107l-1.022,5.043Z"
                    transform="translate(-334.739 -177.773)"
                    fill="#fff"
                  />
                  <path
                    id="Path_666"
                    data-name="Path 666"
                    d="M328.162,177.2c-8.473,0-14.407,5.835-14.407,13.846,0,5.967,4.384,10.154,11.473,10.154,8.472,0,14.406-5.835,14.406-13.846C339.634,181.387,335.25,177.2,328.162,177.2Zm4.672,12.691-9.792,6.083c-.644.4-1.341,0-1.2-.692l2.5-12.166a1,1,0,0,1,1.484-.692l7.293,6.083A.884.884,0,0,1,332.834,189.891Z"
                    transform="translate(-274.324 -177.2)"
                    fill="#13d0b4"
                  />
                  <g
                    id="Group_2013"
                    data-name="Group 2013"
                    transform="translate(0 0.462)"
                  >
                    <path
                      id="Path_667"
                      data-name="Path 667"
                      d="M232.918,198.054a1.159,1.159,0,0,0-1.153-1.128h-.576a1.1,1.1,0,0,0-1.1,1.128,1.17,1.17,0,0,0,1.149,1.125h.576A1.112,1.112,0,0,0,232.918,198.054Z"
                      transform="translate(-227.99 -188.586)"
                      fill="#fff"
                    />
                    <path
                      id="Path_668"
                      data-name="Path 668"
                      d="M226.611,216.087H226.4a1.01,1.01,0,0,0-1.012,1.035,1.059,1.059,0,0,0,1.057,1.035h.212a1.01,1.01,0,0,0,1.012-1.035,1.064,1.064,0,0,0-1.057-1.035Z"
                      transform="translate(-225.385 -199.197)"
                      fill="#fff"
                    />
                    <path
                      id="Path_669"
                      data-name="Path 669"
                      d="M247.465,178.235h-9.222a1.066,1.066,0,0,0-1.055,1.1,1.1,1.1,0,0,0,1.1,1.078h2.061a1.081,1.081,0,0,1,1.052,1.029A1.033,1.033,0,0,1,240.4,182.5h-5.082a1.008,1.008,0,0,0-1.007,1.029,1.06,1.06,0,0,0,1.051,1.029h4.579c.046,0,.1,0,.12.026a1.014,1.014,0,0,1,.9.954.111.111,0,0,1,0,.029.95.95,0,0,1-.092.433.968.968,0,0,1-.773.552c-.022.023-.072.023-.118.023h-2.71a1.1,1.1,0,0,0-1.1,1.125,1.149,1.149,0,0,0,1.149,1.1l2.828-.026h1.306a1.04,1.04,0,0,1,1.031,1.006.975.975,0,0,1-.987,1.012h-1.541l-2.281.02a1.128,1.128,0,0,0-1.123,1.178,1.185,1.185,0,0,0,1.174,1.174h1.343a.949.949,0,0,1,.418.09.994.994,0,0,1,.586.89.964.964,0,0,1-.944.985h-4.45a1,1,0,0,0-1.01,1.032,1.051,1.051,0,0,0,1.054,1.026h5.267a.784.784,0,0,1,.14.012,1.041,1.041,0,0,1,.887,1,.985.985,0,0,1-.984,1.006h-.643a1.024,1.024,0,0,0-.631.259,1.039,1.039,0,0,0-.352.794,1.111,1.111,0,0,0,1.076,1.078h3.426C244.329,194.134,246.1,185.145,247.465,178.235Z"
                      transform="translate(-229.973 -178.235)"
                      fill="#fff"
                    />
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;This library has saved me countless hours of work and
              helped me deliver stunning designs to my clients faster than ever
              before.&rdquo;
            </p>
            <footer className="text-sm">Sofia Davis</footer>
          </blockquote>
        </div>
      </div>
      <div className="flex h-full items-center p-4 lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Sign In
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your email below to login your account
            </p>
          </div>
          <UserAuthForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{' '}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
