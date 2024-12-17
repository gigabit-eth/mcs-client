import Link from 'next/link'

import { IconLink } from '@/components/IconLink'
import { Logo } from '@/components/Logo'
import { SignUpForm } from '@/components/SignUpForm'

function BookIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M7 3.41a1 1 0 0 0-.668-.943L2.275 1.039a.987.987 0 0 0-.877.166c-.25.192-.398.493-.398.812V12.2c0 .454.296.853.725.977l3.948 1.365A1 1 0 0 0 7 13.596V3.41ZM9 13.596a1 1 0 0 0 1.327.946l3.948-1.365c.429-.124.725-.523.725-.977V2.017c0-.32-.147-.62-.398-.812a.987.987 0 0 0-.877-.166L9.668 2.467A1 1 0 0 0 9 3.41v10.186Z" />
    </svg>
  )
}

function GitHubIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M8 .198a8 8 0 0 0-8 8 7.999 7.999 0 0 0 5.47 7.59c.4.076.547-.172.547-.384 0-.19-.007-.694-.01-1.36-2.226.482-2.695-1.074-2.695-1.074-.364-.923-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.224 1.873.87 2.33.666.072-.518.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.954 0-.873.31-1.586.823-2.146-.09-.202-.36-1.016.07-2.118 0 0 .67-.214 2.2.82a7.67 7.67 0 0 1 2-.27 7.67 7.67 0 0 1 2 .27c1.52-1.034 2.19-.82 2.19-.82.43 1.102.16 1.916.08 2.118.51.56.82 1.273.82 2.146 0 3.074-1.87 3.75-3.65 3.947.28.24.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.14.46.55.38A7.972 7.972 0 0 0 16 8.199a8 8 0 0 0-8-8Z" />
    </svg>
  )
}

function TelegramIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" {...props}>
      <path
        d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8m3.71 5.442c-.12 1.264-.642 4.335-.907 5.752-.113.6-.332.8-.545.819-.464.042-.816-.307-1.268-.603-.703-.462-1.103-.749-1.784-1.2-.79-.52-.277-.807.171-1.275.12-.122 2.165-1.983 2.204-2.151.006-.023.01-.1-.04-.142-.047-.042-.115-.026-.164-.016q-.105.022-3.374 2.229-.477.33-.868.32c-.287-.007-.835-.162-1.245-.294-.5-.162-.9-.249-.864-.526q.026-.216.597-.442a411 411 0 0 1 4.664-2.01c2.223-.922 2.684-1.084 2.984-1.09a.54.54 0 0 1 .31.093.34.34 0 0 1 .113.217q.025.158.016.319"
        fill="#FFF"
      />
    </svg>
  )
}

function DiscordIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 13" aria-hidden="true" fill="currentColor" {...props}>
      <path
        d="M13.553 1a.04.04 0 0 0-.021-.02 13.2 13.2 0 0 0-3.255-1.01.05.05 0 0 0-.051.025q-.225.406-.406.833a12.2 12.2 0 0 0-3.657 0 8 8 0 0 0-.41-.833.05.05 0 0 0-.052-.024 13.2 13.2 0 0 0-3.26 1.01.05.05 0 0 0-.022.018C.346 4.1-.223 7.12.055 10.104q.003.024.021.038a13.3 13.3 0 0 0 3.995 2.016.05.05 0 0 0 .057-.019q.463-.63.816-1.328a.05.05 0 0 0-.027-.07 9 9 0 0 1-1.249-.596.052.052 0 0 1-.005-.085q.127-.094.247-.193a.05.05 0 0 1 .052-.008c2.618 1.194 5.453 1.194 8.04 0a.05.05 0 0 1 .052.005q.12.101.248.196a.052.052 0 0 1-.006.085 8 8 0 0 1-1.249.593.05.05 0 0 0-.027.07q.36.694.817 1.328a.05.05 0 0 0 .057.02 13.2 13.2 0 0 0 4.005-2.017.05.05 0 0 0 .022-.038c.332-3.447-.56-6.443-2.368-9.102M5.336 8.285c-.789 0-1.437-.724-1.437-1.61 0-.888.637-1.614 1.437-1.614.808 0 1.45.729 1.437 1.61 0 .89-.637 1.614-1.437 1.614m5.317 0c-.79 0-1.437-.724-1.437-1.61 0-.888.634-1.614 1.437-1.614.808 0 1.45.729 1.437 1.61 0 .89-.632 1.614-1.437 1.614"
        fill="#FFF"
      />
    </svg>
  )
}

function FeedIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.5 3a.5.5 0 0 1 .5-.5h.5c5.523 0 10 4.477 10 10v.5a.5.5 0 0 1-.5.5h-.5a.5.5 0 0 1-.5-.5v-.5A8.5 8.5 0 0 0 3.5 4H3a.5.5 0 0 1-.5-.5V3Zm0 4.5A.5.5 0 0 1 3 7h.5A5.5 5.5 0 0 1 9 12.5v.5a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5v-.5a4 4 0 0 0-4-4H3a.5.5 0 0 1-.5-.5v-.5Zm0 5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
      />
    </svg>
  )
}

function XIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" {...props}>
      <path
        d="M2.286 0A2.29 2.29 0 0 0 0 2.286v11.428A2.29 2.29 0 0 0 2.286 16h11.428A2.29 2.29 0 0 0 16 13.714V2.286A2.29 2.29 0 0 0 13.714 0zm10.61 3L9.19 7.236 13.55 13h-3.414L7.464 9.504 4.404 13H2.707l3.964-4.532L2.49 3h3.5l2.418 3.196L11.2 3zm-1.35 8.986L5.48 3.96H4.468l6.136 8.025z"
        fill="#FFF"
      />
    </svg>
  )
}

export function Intro() {
  return (
    <>
      <div>
        <Link href="/">
          <Logo className="inline-block h-8 w-auto" />
        </Link>
      </div>
      <h1 className="mt-14 font-display text-4xl/tight font-light text-white">
        AI-powered trading and investing{' '}
        <span className="text-sky-300">for everyone</span>
      </h1>
      <p className="mt-4 text-sm/6 text-gray-300">
        MicronStrategy is a platform for creating and managing AI agents that
        can help you with your trading and investing.
      </p>
      <SignUpForm />
      <div className="mt-8 flex flex-wrap justify-center gap-x-1 gap-y-3 sm:gap-x-2 lg:justify-start">
        <IconLink
          href="https://discord.gg/VAtUcQA3JK"
          icon={DiscordIcon}
          className="flex-none"
        >
          Discord
        </IconLink>
        <IconLink
          href="https://t.me/+jRvk6F60hRwxNWMx"
          icon={TelegramIcon}
          className="flex-none"
        >
          Telegram
        </IconLink>
        <IconLink
          href="https://x.com/micronstrategy"
          icon={XIcon}
          className="flex-none"
        >
          Twitter
        </IconLink>
      </div>
    </>
  )
}

export function IntroFooter() {
  return (
    <p className="flex items-baseline gap-x-2 text-[0.8125rem]/6 text-gray-500">
      <IconLink
        href="https://micronstrategy.gitbook.io/micronstrategy"
        icon={BookIcon}
        compact
      >
        Docs
      </IconLink>
      <IconLink
        href="https://github.com/micronstrategy"
        icon={GitHubIcon}
        compact
      >
        Github
      </IconLink>
      <IconLink
        href="https://paragraph.xyz/@micronstrategy"
        icon={FeedIcon}
        compact
      >
        News
      </IconLink>
    </p>
  )
}
