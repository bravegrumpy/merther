<script>
    import "@/styles/global.css";
    import { xata } from "@/lib/xata";

    let name = $state('defalut');
    let email = $state('email');
    let bio = $state('bio');
    let newUser = $derived({
        name: name,
        email: email,
        bio: bio
    });

    async function handleSubmit() {
        await xata.db.users.create({newUser});
    }
</script>

<form class="mt-20 w-50 flex flex-col">
    <div>
        <label for="name" class="text-xl">
            Name: <input bind:value={name} id="name" label="name" class="bg-sky-300 text-indigo-900" />
        </label>
    </div>
    <div>
        <label for="email" class="text-xl">
            Email: <input bind:value={email} id="email" label="bio" class="bg-sky-300 text-indigo-900" />
        </label>
    </div>
    <div>
        <label for="bio" class="text-xl">
            Name: <input bind:value={bio} id="bio" label="bio" class="bg-sky-300 text-indigo-900" />
        </label>
    </div>
    <div>
        <button class="bg-purple-800 text-indigo-50 rounded-md py-2 px-5 mt-5 hover:bg-purple-500" onclick={handleSubmit}>Submit</button>
    </div>
</form>
