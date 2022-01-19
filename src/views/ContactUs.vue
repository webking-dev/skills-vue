<template>
  <div class="container col-lg-8 border p-4">
    <form v-if="!response.status" class="form row" @submit.prevent="submitForm">
      <div class="form-group col-12 row mx-auto mb-5">
        <label for="form-email">Email</label>
        <input
          type="email"
          class="form-control"
          ref="form-email"
          id="form-email"
          placeholder="name@example.com"
          v-model="form.email"
        />
      </div>
      <div class="form-group col-12 row mx-auto mb-5">
        <label for="form-subject">Subject</label>
        <input
          disabled
          type="email"
          class="form-control"
          ref="form-subject"
          id="form-subject"
          v-model="form.subject"
        />
      </div>
      <div class="form-group col-12 row mx-auto">
        <label for="form-body">Body</label>
        <textarea
          placeholder="Your email content here..."
          class="form-control col-12"
          ref="form-body"
          id="form-body"
          v-model="form.body"
        ></textarea>
      </div>
      <div class="form-group col-12 row mx-auto pt-4">
        <input class="btn btn-primary" type="submit" value="Submit" />
      </div>
    </form>
    <div v-else-if="response.status === 200" id="success">
      <span>The message was successfully sent!</span><br/>
      <input class="btn btn-primary mt-4" value="Okay" @click="response.status = 0"/>
    </div>
    <div v-else id="error">
      Error occured
    </div>
  </div>
</template>

<style lang="scss" scoped>
form {
  label {
    font-weight: 700;
    text-align: left;
  }
  textarea {
    min-height: 200px !important;
  }
}
</style>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  name: 'ContactUs',
  data: () => ({
    form: {
      subject: 'skills-vue Submission',
      email: '',
      body: '',
    },
    response: {
      status: 0,
    },
  }),
  methods: {
    async submitForm() {
      try {
        const response = await fetch('https://enociv9ekmecyez.m.pipedream.net/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.form),
        });
        this.response.status = response.status;
      } catch (error) {
        // console.error(error);
      }
    },
  },
})
export default class ContactUs extends Vue {
  form!: Record<string, unknown>;
}
</script>
