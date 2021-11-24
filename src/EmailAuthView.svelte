<script>
  import LinkButton from './LinkButton.svelte'
  import Text from './Text.svelte'
  import Button from './Button.svelte'
  import Input from './Input.svelte'

  export let supabaseClient
  export let view
  export let setView

  let error = '', message = '', loading = false, email = '', password = '', confirm_password = ''

  async function submit() {
    error = ''
    message = ''
    loading = true

    if (password == '') {
      error = 'Please enter a password.'
    }
    else {
      if (view == 'sign_up') {
        if (password != confirm_password){
          error = 'Passwords do not match'
        } else {
          const { error: signUpError } = await supabaseClient.auth.signUp({
            email, password
          })

          if (signUpError) {
            error = signUpError.message;
            console.log(error);
          } else {
            message = 'Check your email to confirm your sign up.'
          }
        }
      } else if (view == 'sign_in') {
        const { error: signInError } = await supabaseClient.auth.signIn({
          email, password
        })

        if (signInError) error = signInError.message
      }
    }

    loading = false
  }
</script>

<form on:submit|preventDefault={submit}>
  <Input name="email" type="email" label="Email address" icon="mail" bind:value={email}/>
  <Input name="password" type="password" label="Password" icon="key" bind:value={password}/>

  {#if view == 'sign_up'}
    <!-- Confirm password-->
    <Input name="password" type="password" label="Confirm Password" icon="key" bind:value={confirm_password}/>

    <Button block primary size="large" {loading} icon="inbox">Sign up</Button>
    <div class="links">
      <!-- <LinkButton on:click={() => setView('magic_link')}>Sign in with email (magic link)</LinkButton> -->
      <LinkButton on:click={() => setView('sign_in')}>Do you have an account? Sign in</LinkButton>
    </div>
  {:else}
    <Button block secondary size="large" {loading} icon="login">Sign in</Button>
    <div class="links">
      <LinkButton on:click={() => setView('sign_up')}>Don't have an account? Sign up</LinkButton>
      <!-- <LinkButton on:click={() => setView('forgotten_password')}>Reset password.</LinkButton> -->
    </div>
  {/if}

  {#if message}
    <Text>{message}</Text>
  {/if}

  {#if error}
    <Text type="danger">{error}</Text>
  {/if}
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
  }

  .links {
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
    gap: 0.5rem;
  }
</style>
