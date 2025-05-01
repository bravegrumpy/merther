<script>
let themes = [
        {
            file: 'main',
            text: 'Simple',
            strategy: 'vanilla',
            lang: 'CSS',
            id: '00'
        },
        {
            file: 'app',
            text: 'Tailwind',
            strategy: 'tailwind',
            lang: 'Tailwind 4.0',
            id: '01'
        },
        {
            file: 'print',
            text: 'Print Preview',
            strategy: 'css',
            lang: 'CSS',
            id: '02'
        }
    ];

    let selected = $state(themes[0])
</script>
<svelte:head>
    <link rel="stylesheet" href="" /></svelte:head>
<select bind:value={selected}>
    {#each themes as theme (theme.id)}
        <option value={theme}>{theme.text}</option>
    {/each}
</select>