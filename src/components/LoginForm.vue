<template>
  <div
    class="text-white text-center font-bold p-4 mb-4"
    v-if="login_show_alert"
    :class="login_alert_variant"
  >
    {{ login_alert_message }}
  </div>
  <!-- Login Form starts here-->
  <vee-form :validation-schema="loginSchema" @submit="login">
    <!-- toggling the visibility of the form -->

    <!-- Email -->
    <div class="mb-3">
      <label class="inline-block mb-2">Email</label>
      <vee-field
        type="email"
        name="email"
        class="
          block
          w-full
          py-1.5
          px-3
          text-gray-800
          border border-gray-300
          transition
          duration-500
          focus:outline-none focus:border-black
          rounded
        "
        placeholder="Enter Email"
      />
      <ErrorMessage class="text-red-600" name="email" />
    </div>
    <!-- Password -->
    <div class="mb-3">
      <label class="inline-block mb-2">Password</label>
      <vee-field
        type="password"
        name="password"
        class="
          block
          w-full
          py-1.5
          px-3
          text-gray-800
          border border-gray-300
          transition
          duration-500
          focus:outline-none focus:border-black
          rounded
        "
        placeholder="Password"
      />
      <ErrorMessage class="text-red-600" name="password" />
    </div>
    <button
      type="submit"
      :disabled="login_in_submission"
      class="
        block
        w-full
        bg-purple-600
        text-white
        py-1.5
        px-3
        rounded
        transition
        hover:bg-purple-700
      "
    >
      Submit
    </button>
  </vee-form>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      loginSchema: {
        email: 'required|email',
        password: 'required|min:3|max:32',
      },
      login_in_submission: false, // disable the button while the form is submitting the data,
      login_show_alert: false, // toggle the alert's visibility
      login_alert_variant: 'bg-blue-500', // changes the color of the alert
      login_alert_message: 'Please wait! as we log you in.', // message inside the alert
    };
  },
  methods: {
    async login(values) {
      this.login_in_submission = true;
      this.login_show_alert = true;
      this.login_alert_variant = 'bg-blue-500';
      this.login_alert_message = 'Please wait! as we log you in.';

      try {
        await this.$store.dispatch('login', values);
      } catch (error) {
        this.login_in_submission = false;
        this.login_alert_variant = 'bg-red-500';
        this.login_alert_message = 'invalid login details';
        return;
      }

      this.login_alert_variant = 'bg-green-500';
      this.login_alert_message = 'Successfully logged in';

      window.location.reload();
    },
  },
};
</script>

<style></style>
