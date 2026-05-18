<script setup>
// Имитация реактивного состояния загруженных файлов
const userPhoto = ref(null); // Сюда прилетит ссылка/base64 после загрузки
const coverPhoto = ref(null);

// Для демонстрации второго скриншота (загруженное состояние)
const setToDemoImages = () => {
  userPhoto.value =
    "https://images.unsplash.com/photo-1506126613408-eca07ce68773"; // йога
  coverPhoto.value =
    "https://images.unsplash.com/photo-1517838277536-f5f99be501cd"; // штанга
};

const removePhoto = (type) => {
  if (type === "photo") userPhoto.value = null;
  if (type === "cover") coverPhoto.value = null;
};
</script>

<template>
  <div class="upload-section">
    <button @click="setToDemoImages" class="demo-btn">
      Проверить состояние с картинками
    </button>

    <UiInputUploadRow>
      <template #visual>
        <UiInputUploadImagePreview
          v-if="userPhoto"
          :src="userPhoto"
          variant="circle"
        />
        <UiInputUploadImagePlaceholderCircle v-else />
      </template>

      <template #content>
        <div v-if="!userPhoto" class="info-block">
          <h3>Information about adding photo</h3>
          <p>
            Information about adding photo. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint.
          </p>
        </div>

        <div v-else class="file-manage">
          <div class="file-manage__info">
            <UiIcon name="check-circle" class="icon-success" />
            <span class="file-manage__name">File_name.jpeg</span>
            <UiIcon
              name="trash"
              class="icon-delete"
              @click="removePhoto('photo')"
            />
          </div>
          <button class="change-file-btn">Change file</button>
        </div>
      </template>
    </UiInputUploadRow>

    <hr class="divider" />

    <UiInputUploadRow>
      <template #visual>
        <UiInputUploadImagePreview
          v-if="coverPhoto"
          :src="coverPhoto"
          variant="rect"
        />
        <UiInputUploadImagePlaceholderRect v-else />
      </template>

      <template #content>
        <div v-if="!coverPhoto" class="info-block">
          <h3>Information about adding cover</h3>
          <p>
            Information about adding photo. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint.
          </p>
        </div>

        <div v-else class="file-manage">
          <div class="file-manage__info">
            <UiIcon name="check-circle" class="icon-success" />
            <span class="file-manage__name">File_name.jpeg</span>
            <UiIcon
              name="trash"
              class="icon-delete"
              @click="removePhoto('cover')"
            />
          </div>
          <button class="change-file-btn">Change file</button>
        </div>
      </template>
    </UiInputUploadRow>
  </div>
</template>

<style lang="scss" scoped>
.upload-section {
  background: #000000; // Тёмная тема из макета
  padding: 40px;
  min-height: 100vh;
  color: #ffffff;
  font-family: "Uto", sans-serif;
}

// Стили текстового блока "До загрузки"
.info-block {
  h3 {
    font-size: 16px;
    font-weight: 600;
    margin: 0 0 8px 0;
    color: #ffffff;
  }
  p {
    font-size: 14px;
    line-height: 18px;
    color: #bbbbbb;
    margin: 0;
  }
}

// Стили блока управления "После загрузки"
.file-manage {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;

  &__info {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 8px;
  }

  &__name {
    font-weight: 600;
    font-size: 16px;
    color: #ffffff;
    flex-grow: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

// Иконки и кнопки управления
.icon-success {
  width: 24px;
  height: 24px;
  color: #55ad73; // Зеленый чек
}

.icon-delete {
  width: 24px;
  height: 24px;
  color: #bbbbbb;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #ff4d4d;
  }
}

.change-file-btn {
  background: none;
  border: none;
  padding: 0;
  font-size: 14px;
  color: #ad7955; // light из Figma
  text-decoration: underline;
  cursor: pointer;
  text-align: left;
  width: fit-content;

  &:hover {
    color: lighten(#ad7955, 10%);
  }
}

.divider {
  border: 0;
  height: 1px;
  background: #222222;
  margin: 30px 0;
  max-width: 436px;
}

.demo-btn {
  margin-bottom: 20px;
  padding: 8px 16px;
  background: #ad7955;
  border: none;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}
</style>
