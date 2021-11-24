<script>
  import Icon from './Icon.svelte'

  export let block = false
  export let primary = false
  export let secondary = false;
  export let size = 'tiny'
  export let loading = false
  export let icon = null
  export let style = {}

  $: styleString = Object.entries(style).map(([key, value]) => {
    return `${key}: ${value}`
  }).join(';')
</script>

<button title={icon} class:block class={size} class:primary class:secondary style={styleString} on:click disabled={loading}>
  {#if icon && !loading}
    <span class="icon">
      <Icon name={icon} size=21/>
    </span>
  {:else}
      <Icon name='spinner' size=20/>
  {/if}
  

  <span><slot/></span>
</button>

<style>
  button {
    color: #444;
    text-shadow: 0px 0px 4px rgb(38 111 78 / 50%);
    background: none;

    border-color: rgba(224, 224, 224);
    border-style: solid;
    border-width: 1px;
    cursor: pointer;
    display: inline-flex;
    gap: 0.5rem;
    align-items: center;
    position: relative;
    text-align: center;
    transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    border-radius: 0.25rem;
    font-family: inherit;
    font-weight: inherit;
  }

  button.primary {
    /* background: rgba(101, 217, 165); */
    background: rgb(18, 162, 97);
    border-color: transparent;
    color: white;
  }

  button.secondary {
    background: #595858;
    border-color: transparent;
    color: white;
  }

  .icon {
    display: flex;
  }

  button.large {
    font-size: 1rem;
    line-height: 1.5rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  button.medium {
    font-size: 0.875rem;
    line-height: 1.25rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  button.block {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  button.primary:disabled{
    background: rgb(10, 92, 55);
    cursor: wait;
  }

  button.secondary:disabled{
    background: #3d3d3d;
    cursor: wait;
  }

</style>
