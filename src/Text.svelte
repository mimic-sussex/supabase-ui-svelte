<script>
  export let type = ''
</script>

<span class:danger={type=='danger'}>
  <slot/>
</span>

<style>
  .danger {
    color: rgba(245, 101, 101);
    text-align: center;
  }

  .sucess {
    color: white;
    text-align: center;
  }
</style>
