import { shallowMount } from '@vue/test-utils';
import Contact from '@/views/ContactUs.vue';

describe('Contact.vue', () => {
  it('fill form data', async () => {
    const wrapper = shallowMount(Contact, {});
    const mock = {
      subject: 'skills-vue Submission',
      email: 'sunmandev@gmail.com',
      body: 'I would like to work with you!',
    };
    const subject = wrapper.find('input[id="form-subject"]');
    await subject.setValue(mock.subject);

    const email = wrapper.find('input[id="form-email"]');
    await email.setValue(mock.email);

    const body = wrapper.find('textarea[id="form-body"]');
    await body.setValue(mock.body);

    expect(wrapper.vm.form.subject).toBe(mock.subject);
    expect(wrapper.vm.form.email).toBe(mock.email);
    expect(wrapper.vm.form.body).toBe(mock.body);
  });
});
