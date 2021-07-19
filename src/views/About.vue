<template>
  <figure class="md:flex bg-white rounded-xl p-8 md:p-0 shadow">
    <img
      class="
        w-32
        h-32
        md:w-48 md:h-auto
        rounded-full
        md:rounded-none md:rounded-tl-xl md:rounded-bl-xl
        mx-auto
        object-cover
      "
      src="../assets/profile.jpg"
      alt="Profile picture"
    />
    <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
      <blockquote>
        <p class="text-lg font-semibold">
          This project is a playground that I'm using to learn VueJS and also
          Tailwindcss, on the home page, you can execute money conversion using
          the API provided by
          <a
            class="text-blue-300"
            href="https://exchangerate.host/"
            target="_blank"
            >Exchangerate Host</a
          >
          and soon by
          <a class="text-blue-300" href="https://swop.cx/" target="_blank"
            >Swop</a
          >
          using graphql
        </p>
      </blockquote>
      <figcaption class="font-medium">
        <div class="text-blue-600">Richard Lindner</div>
        <div class="text-gray-500">Frontend Engineer</div>
      </figcaption>
    </div>
  </figure>
</template>
