<script setup lang="ts">
import { FormKit } from '@formkit/vue'

// interface IData {
//   text: string
//   email: string
// }

// const sendEmail = async (data: IData) => {
//   try {
//     const emailResponse = await fetch(`${locale}/api/send-email`, {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json, text/plain, */*',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         subject: 'Customer request list',
//         to: 'iurii712@ukr.net',
//         bookingData: data
//       })
//     })

//     // handle sendEmail error
//     if (!emailResponse.ok) {
//       throw new Error()
//     }

//     return true
//   } catch (error: IErrorResponse | any) {
//     setErrorMessage(!!error.response?.data ? error.response.data.message : unsuccessMessage)
//     return false
//   }
// }

function submitApplication() {
  alert('Application submitted!')
}
</script>

<template>
  <div class="form-card">
    <FormKit
      id="fk-univ-app"
      type="form"
      form-class="fk-univ-app"
      submit-label="🛬 Dispatch 🛫"
      incomplete-message="Sorry. The application was not submitted because not all fields are filled out correctly."
      @submit="submitApplication"
    >
      <FormKit
        name="question"
        type="textarea"
        label="Enter your question:"
        validation="required|length:10,1000"
        validation-label="Your question"
        validation-visibility="blur"
        rows="6"
      >
        <template #help="context">
          <div :class="[context.classes.help]">
            <span class="italic text-[rgba(42, 132, 184, 0.8)]"
              >{{ 1000 - (context._value ? context._value.length : 0) }} / 1000 characters
              remaining</span
            >
          </div>
        </template>
      </FormKit>

      <FormKit
        name="email"
        type="email"
        label="Enter your email:"
        validation="required|email"
        validation-label="Your email"
        validation-visibility="blur"
        placeholder="example@example.com"
      />

      <FormKit
        name="ukraїner"
        type="checkbox"
        validation="required|min:1"
        :options="[`I do NOT support russia's attack on Ukraine. Crimea and Donbas are Ukraine.`]"
        outer-class="flex flex-col gap-2"
        label-class="text-xl text-white md:text-xl font-bold ml-2"
      />
    </FormKit>
  </div>
</template>

<style>
.form-card {
  max-width: 500px;
  width: 100%;
}
.formkit-outer {
  margin-bottom: 34px;
}

div.formkit-wrapper {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 8px;
}
label.formkit-wrapper {
  display: flex;
  gap: 6px;
  margin-bottom: 8px;
}

.formkit-label {
  font-size: 26px;
  font-weight: 600;
}

.formkit-inner {
  max-width: 500px;
  width: 100%;
  border-radius: 4px;
  padding: 0;
  margin: 0;
}
.formkit-option .formkit-inner {
  max-width: fit-content;
  width: 100%;
  border-radius: 4px;
  padding: 0;
  margin: 0;
}

.formkit-inner input {
  width: 100%;
  padding: 2px 10px;
  border: 3px solid #fff;
  border-radius: 4px;
  outline: none;
  color: #000;
}
.formkit-inner input:focus-within {
  outline: none;
  border: 3px solid rgba(42, 132, 184, 0.8);
}
.formkit-inner input:focus {
  border: 3px solid rgba(42, 132, 184, 0.8);
}
.formkit-inner textarea {
  width: 100%;
  padding: 2px 10px;
  border: 3px solid #fff;
  border-radius: 4px;
  outline: none;
  color: #000;
}
.formkit-inner textarea:focus-within {
  outline: none;
  border: 3px solid rgba(42, 132, 184, 0.8);
}
.formkit-inner textarea:focus {
  border: 3px solid rgba(42, 132, 184, 0.8);
}
.formkit-message {
  font-size: 18px;
  color: rgb(255, 117, 117);
}

.formkit-help {
  font-size: 20px;
  color: #1a5170;
}

.formkit-input[type='checkbox'] {
  width: 16px;
  height: 16px;
}

span.formkit-label {
  font-size: 20px;
}

button.formkit-input {
  flex: 0 0 fit-content;
  display: inline-flex;

  align-items: center;
  gap: 4px;

  background: #ffeb3b;
  border-radius: 8px;
  padding: 10px 20px;
  margin: 20px auto;

  color: #000;

  transition: all linear 0.3s;
}

button.formkit-input:hover {
  background: hsla(240, 30%, 41%, 0.8);
  border-radius: 8px;
  padding: 10px 20px;
  color: #fff;
}

button.formkit-input:disabled {
  opacity: 0.8;
}
</style>
