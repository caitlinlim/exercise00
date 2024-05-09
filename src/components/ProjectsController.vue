<template>
    <div class="max-w-screen-md mx-auto">
      <div v-for="p in project" :key="p.id" class="project-item bg-white" :style="{ marginBottom:'5rem', marginTop:'5rem' }">
        <ProjectCard :project="p" />
      </div>
    </div>
  
</template>
  
<script>
  import Projects from '../projects.json';
  import ProjectCard from './ProjectCard.vue';
  
  export default {
      components: {
          ProjectCard
      },
      data() {
          return {project : Projects}
      }
  }
</script>
  
  