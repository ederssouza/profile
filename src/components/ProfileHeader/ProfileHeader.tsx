import { profile } from 'data/profile.json'
import * as S from './styles'

type Props = {
  name: string
  jobTitle: string
  avatar: string
  active?: boolean
}

const Icons = {
  facebook: () => (
    <S.SocialIcon viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.997 3.985h2.191V.169C17.81.117 16.51 0 14.996 0c-3.159 0-5.323 1.987-5.323 5.639V9H6.187v4.266h3.486V24h4.274V13.267h3.345l.531-4.266h-3.877V6.062c.001-1.233.333-2.077 2.051-2.077z" />
    </S.SocialIcon>
  ),
  twitter: () => (
    <S.SocialIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z" />
    </S.SocialIcon>
  ),
  instagram: () => (
    <S.SocialIcon viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <path d="M301 256c0 24.852-20.148 45-45 45s-45-20.148-45-45 20.148-45 45-45 45 20.148 45 45zm0 0" />
      <path d="M332 120H180c-33.086 0-60 26.914-60 60v152c0 33.086 26.914 60 60 60h152c33.086 0 60-26.914 60-60V180c0-33.086-26.914-60-60-60zm-76 211c-41.355 0-75-33.645-75-75s33.645-75 75-75 75 33.645 75 75-33.645 75-75 75zm86-146c-8.285 0-15-6.715-15-15s6.715-15 15-15 15 6.715 15 15-6.715 15-15 15zm0 0" />
      <path d="M377 0H135C60.562 0 0 60.563 0 135v242c0 74.438 60.563 135 135 135h242c74.438 0 135-60.563 135-135V135C512 60.562 451.437 0 377 0zm45 332c0 49.625-40.375 90-90 90H180c-49.625 0-90-40.375-90-90V180c0-49.625 40.375-90 90-90h152c49.625 0 90 40.375 90 90zm0 0" />
    </S.SocialIcon>
  ),
  LinkedIn: () => (
    <S.SocialIcon viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 002.882 0z" />
    </S.SocialIcon>
  ),
  GitHub: () => (
    <S.SocialIcon viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.208 11.366.6.111.82-.256.82-.574 0-.283-.01-1.03-.015-2.02-3.338.723-4.042-1.609-4.042-1.609-.547-1.385-1.336-1.756-1.336-1.756-1.09-.746.083-.731.083-.731 1.204.084 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.305 3.487.998.109-.776.42-1.305.764-1.605-2.665-.3-5.466-1.334-5.466-5.93 0-1.31.468-2.38 1.236-3.222-.125-.303-.536-1.527.116-3.181 0 0 1.007-.323 3.3 1.233.958-.267 1.982-.4 3-.405 1.017.005 2.042.138 3 .405 2.29-1.556 3.295-1.233 3.295-1.233.654 1.654.244 2.878.119 3.181.77.842 1.232 1.912 1.232 3.222 0 4.608-2.805 5.627-5.475 5.922.43.372.816 1.102.816 2.219 0 1.601-.015 2.891-.015 3.284 0 .318.214.689.824.572C20.563 21.795 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </S.SocialIcon>
  )
} as { [key: string]: () => React.ReactElement }

function ProfileHeader(props: Props) {
  const { name, jobTitle, avatar, active } = props

  return (
    <>
      <S.Header active={active}>
        <S.Cover
          active={active}
          data-id="dsdas"
          style={{
            backgroundImage: `url(/img/bg2.jpg)`
          }}
        />

        <S.Avatar src={avatar} alt="avatar" active={active} />
        <S.Fullname active={active}>{name}</S.Fullname>
        <S.Jobtitle active={active}>{jobTitle}</S.Jobtitle>
      </S.Header>

      {!active && (
        <S.Social>
          {profile.socialMedia.map((media) => (
            <S.SocialLink key={media.name} href={media.url} title={media.name}>
              {Icons[media.name]?.()}
            </S.SocialLink>
          ))}
        </S.Social>
      )}
    </>
  )
}

export default ProfileHeader
