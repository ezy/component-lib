import { html } from "lit-html";
      import "../template-sources/nzgovt-import/DateInput.css";
      
      export default {
          title: "nzgovt-import",
          component: "DateInput",
      };
      
      export const DateInput = () => html`<div class="g-dateInput-form-group">
  <fieldset class="g-dateInput-fieldset" role="group">
    <legend class="g-dateInput-fieldset__legend">
      Example label
    </legend>
    <span class="g-dateInput-hint">
      Example hint
    </span>

    <span class="g-dateInput-error-message">
      <span class="g-dateInput-visually-hidden">Error: </span>
      Example error
    </span>

    <div class="g-dateInput">
      <div class="g-dateInput__item">
        <div class="g-dateInput-form-group">
          <label class="g-dateInput-label g-dateInput__label">
            Day
          </label>
          <input
            class="g-dateInput-input g-dateInput__input g-dateInput-input--width-2"
            maxlength="2"
            name="example"
            pattern="[0-9]*"
            type="text"
            autocomplete="example"
          />
        </div>
      </div>
      <div class="g-dateInput__item">
        <div class="g-dateInput-form-group">
          <label class="g-dateInput-label g-dateInput__label">
            Month
          </label>
          <input
            class="g-dateInput-input g-dateInput__input g-dateInput-input--width-2"
            maxlength="2"
            name="example"
            pattern="[0-9]*"
            type="text"
            autocomplete="example"
          />
        </div>
      </div>
      <div class="g-dateInput__item">
        <div class="g-dateInput-form-group">
          <label class="g-dateInput-label g-dateInput__label">
            Year
          </label>
          <input
            class="g-dateInput-input g-dateInput__input g-dateInput-input--width-4"
            maxlength="4"
            name="example"
            pattern="[0-9]*"
            type="text"
            autocomplete="example"
          />
        </div>
      </div>
    </div>
  </fieldset>
</div>
`;