<template>

  <div class="flex items-center justify-center">
    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <div v-if="dialogMilestonesOpen" class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
  <div v-if="dialogMilestonesOpen" class="fixed inset-0 z-10 w-screen overflow-y-auto">
    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
      <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
        <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <!-- <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                <img src="../assets/A_Blue_Star.png" alt="Star" class="h-6 w-6 text-red-600" />
            </div> -->
            <div class="mt-3 text-center sm:mt-0 sm:text-left">
              <h2 class="ml-3 font-bold leading-6 text-sky-800" id="modal-title">Project Milestones</h2>
              <div class="mt-3 sm:mt-4 sm:text-left">
      <ul class="list-disc ml-6">
        <li v-for="milestone in project.milestones" :key="milestone.id" class="text-gray-600">{{ milestone.title.replace(/[^'\w\s]/g, '') }}</li>
      </ul>
                  </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button @click="closeDialog" type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-sky-700 sm:mt-0 sm:w-auto">Close</button>
        </div>
      </div>
    </div>
  </div>


  <div v-if="dialogRisksOpen" class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity">
    <div class="fixed inset-0 overflow-hidden">
      <div class="absolute inset-0 overflow-hidden">
        <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
          <div class="pointer-events-auto relative w-screen max-w-md">
            <div class="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
              <button @click="closeRisksDialog" type="button" class="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
                <span class="absolute -inset-2.5"></span>
                <span class="sr-only">Close panel</span>
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div class="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
              <div class="px-4 sm:px-6">
                <h2 class="ml-2 font-bold leading-6 text-red-600" id="slide-over-title">Project Risks</h2>
              </div>
              <div class="relative mt-6 flex-1 px-4 sm:px-6">
                <!-- Display risks here -->
                <ul class="list-disc ml-6">
                  <li v-for="risk in currentRisks" :key="risk.id" class="text-gray-600">{{ risk.title.replace(/[^'\w\s]/g, '') }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  
</div>



    <div class="p-10 rounded-2xl shadow-lg border-sky-100 border-4 font-sans text-gray-600">
      <h2 class="text-xl text-sky-700 text-center font-bold pb-5">
        <a :href="project.webUrl" target="_blank" class="hover:text-sky-900 hover:underline">{{ project.name }}</a>
      </h2>
      
      <div class="flex flex-wrap justify-center items-center pb-10">
      <span class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-bold text-sky-800 ring-1 ring-inset ring-blue-700/10 ">{{ project.fiscal[0] }}</span>
      <span class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-bold text-sky-800  ring-1 ring-inset ring-blue-700/10 ml-2">{{ project.visibility }}</span>
    <span @click="openStatusDialog" class="inline-flex items-center rounded-md bg-blue-50 hover:bg-blue-100 px-2 py-1 text-xs font-bold text-sky-800 ring-1 ring-inset ring-blue-700/10 ml-2">Status: {{ formatDate(project.status.lastUpdated) }}</span>
    <div v-if="dialogStatusOpen" class="fixed inset-0 z-10 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div class="bg-white p-6 rounded-lg w-full max-h-96 overflow-y-auto">
        <h2 class="text-lg font-semibold mb-4">Status Items</h2>
        <ul>
          <li v-for="(item, index) in project.status.items" :key="index" class="mb-4">
            <div v-html="item"></div>
          </li>
        </ul>
        <button @click="closeStatusDialog" class="mt-6 bg-sky-500 text-white px-4 py-2 rounded-md hover:bg-sky-600">Close</button>
      </div>
    </div>
    </div>



      <!-- <p class="text-tahiti hover:underline">View Project
        <a :href="project.webUrl" target="_blank">{{ project.webUrl }}</a>
      </p> -->
      
      <h3 class="mt-4 text-lg text-sky-700 font-semibold">Project Description</h3>
      <p class="text-gray-600 max-w-full overflow-x-auto pb-5">{{ project.descriptionHtml.replace(/<\/?[^>]+(>|$)/g, "") }}</p>
      <h3 class="mt-4 text-lg text-sky-700 font-semibold">Contact Information</h3>
      <p class="text-gray-600 hover:text-sky-700 hover:text-semibold">
        <a :href="'mailto:' + project.contact">{{ project.contact }}</a>
      </p>
      <p class="text-gray-600 hover:text-sky-700 hover:text-semibold pb-5">
        <a :href="'mailto:' + project.businessPartnerContact">{{ project.businessPartnerContact }}</a>
      </p>
    
      
      
      <div class="flex flex-col max-w-48">
      <button v-if="project.milestones && project.milestones.length > 0" @click="openDialog(project.milestones)" class="mt-4 bg-sky-600 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded">
        <span class="flex items-center">
            View Milestones 
            <img src="../assets/icons8-star-50.png" alt="Milestones Icon" class="h-5 w-5 ml-2">
        </span>
      </button>
    </div>

    <div class="flex flex-col max-w-36">
      <button v-if="project.risks && project.risks.length > 0" @click="openRisksDialog(project.risks)" class="mt-4 bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        <span class="flex items-center">
            View Risks
            <img src="../assets/icons8-medium-risk-50.png" alt="Milestones Icon" class="h-5 w-5 ml-2">
        </span>
    </button>
    </div>
    </div>
  </div>
</template>

  
<style scoped>
.container {
  width: 400px; /* Fixed width */
  height: 300px; /* Fixed height */
}
</style>
  
<script>
export default {
  props: {
    project: Object // Define a prop named 'project' of type Object
  },
  data() {
    return {
      dialogMilestonesOpen: false,
      dialogStatusOpen: false,
      dialogRisksOpen: false,
      currentMilestones: [],
      currentStatus: [],
      currentRisks: [],
    };
  },
  methods: {
    search() {
      // You can add additional search logic here if needed
    },
    openDialog(milestones) {
        
      this.dialogMilestonesOpen = true;
      this.currentMilestones = milestones;
    },
    closeDialog() {
      this.dialogMilestonesOpen = false;
      this.currentMilestones = [];
    },
    openStatusDialog(status) {
      this.dialogStatusOpen = true;
      this.currentStatus = status;
      console.log("clicked");
    },
    closeStatusDialog() {
      this.dialogStatusOpen = false;
      this.currentStatus = [];
    },
    openRisksDialog(risks) {
      this.dialogRisksOpen = true;
      this.currentRisks = risks;
    },
    closeRisksDialog() {
      this.dialogRisksOpen = false;
      this.currentRisks = [];
    },
    formatDate(dateString) {
      // Assuming dateString is in ISO format like "2024-03-14T13:03:11+00:00"
      const date = new Date(dateString);
      return date.toLocaleDateString(); // Customize the date format as needed
    },
  },
}
</script>
