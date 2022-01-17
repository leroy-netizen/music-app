<template>
    <section class="container mx-auto mt-6">
    <div class="md:grid md:grid-cols-3 md:gap-4">
      <div class="col-span-1">
        <!-- AppUploaded inserted here -->
        <app-upload ref="upload" />
      </div>
      <div class="col-span-2">
        <div class="bg-white rounded border border-gray-200 relative flex flex-col">
          <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
            <span class="card-title">My Songs</span>
            <i class="fa fa-compact-disc float-right text-green-400 text-2xl"></i>
          </div>
          <div class="p-6">
            <!-- Composition Items -->
                <composition-item v-for="song in songs" :key="song.Docid" :song ="song" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import store from '@/store';
import { songsCollection, auth } from '@/includes/firebase';
import CompositionItem from '@/components/CompositionItem.vue';
import AppUpload from '@/components/Upload.vue';

export default {
  name: 'Manage',

  components: {
    AppUpload,
    CompositionItem,

  },
  data() {
    return {
      songs: [],
    };
  },
  async created() {
    const snapshot = await songsCollection.where('uid', '==', auth.currentUser.uid)
      .get();

    snapshot.forEach((document) => {
      const song = {
        ...document.data(),
        docID: document.id, // makes sure we update the correct document
      };

      this.songs.push(song);
    });
  },
  // beforeRouteLeave(to, from, next) {
  //   this.$refs.upload.cancelUploads();
  //   next();
  // },
  // beforeRouteEnter(to, from, next) {
  //   console.log(store.state.userLoggedIn);
  //   if (store.state.userLoggedIn) {
  //     next();
  //   } else {
  //     next({ name: 'Home' });
  //   }
  // },
};
</script>
