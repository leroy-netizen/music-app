<template>
    <section class="container mx-auto mt-6">
    <div class="md:grid md:grid-cols-3 md:gap-4">
      <div class="col-span-1">
        <!-- AppUploaded inserted here -->
        <app-upload ref="upload" :addSong="addSong" />
      </div>
      <div class="col-span-2">
        <div class="bg-white rounded border border-gray-200 relative flex flex-col">
          <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
            <span class="card-title">My Songs</span>
            <i class="fa fa-compact-disc float-right text-green-400 text-2xl"></i>
          </div>
          <div class="p-6">
            <!-- Composition Items -->
                <composition-item v-for="(song, i) in songs" :key="song.Docid"
                :song ="song"
                :updateSong="updateSong"
                :index="i"
                :removeSong="removeSong"
                :updateUnsavedFlag ="updateUnsavedFlag" />
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
      unsavedFlag: false,
    };
  },
  async created() {
    const snapshot = await songsCollection
      .where('uid', '==', auth.currentUser.uid)
      .get();

    snapshot.forEach(this.addSong);
  },
  methods: {
    updateSong(i, values) {
      this.songs[i].modified_name = values.modified_name;
      this.songs[i].genre = values.genre;
    },
    removeSong(i) {
      this.songs.splice(i, 1); // removing items from an array
    },
    addSong(document) {
      const song = {
        ...document.data(),
        docID: document.id, // makes sure we update the correct document
      };

      this.songs.push(song);
    },
    updateUnsavedFlag(value) {
      this.updateUnsavedFlag = value;
    },
  },
  beforeRouteLeave(to, from, next) {
    if (!this.updateUnsavedFlag) {
      next();
    } else {
      // eslint-disable-next-line no-alert, no-restricted-globals
      const leave = confirm('You have unsaved changes. Are you sure you want to leave?');
      next(leave);
    }
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
