<template>
    <nav class="flex justify-between h-24 items-center mx-8">
        <!-- logo -->
        <div class="w-12">
            <img src="~/assets/image/logo-green.png" />
        </div>
        <!-- end logo -->

        <!-- menu -->
        <div class="text-xs flex gap-8">
            <ol class="flex gap-8 list-decimal">
                <li><a href="javascript:;" class="p-3 block hover:text-green-goblin">About</a></li>
                <li><a href="javascript:;" class="p-3 block hover:text-green-goblin">Experiment</a></li>
                <li><a href="javascript:;" class="p-3 block hover:text-green-goblin">Work</a></li>
                <li><a href="javascript:;" class="p-3 block hover:text-green-goblin">Contact</a></li>
            </ol>
            <button class="text-green-goblin px-5 border-green-goblin border-2 rounded hover:bg-green-goblin-tint">Resume</button>
        </div>
        <!-- end menu -->
    </nav>
</template>


<style lang="postcss" scoped>
 li::marker {
    @apply text-green-goblin;
 }
</style>