import type { SvelteComponentTyped } from 'svelte'
import type { SupabaseClient } from '@supabase/supabase-js'

export interface AuthProps {
  supabaseClient: SupabaseClient
  providers?: ('azure' | 'bitbucket' | 'discord' | 'facebook' | 'github' | 'gitlab' | 'google' | 'twitter')[]
  view?: 'sign_in' | 'sign_up' | 'magic_link' | 'forgotten_password'
  classes?: string
  style?: string
  socialLayout?: 'vertical' | 'horizontal'
  socialColors?: boolean
  socialButtonSize?: 'medium' | 'large'
}

export default class Auth extends SvelteComponentTyped<AuthProps> {}
