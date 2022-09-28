<template>
  <div class="c-l-header">
    <header>
      <div class="container mx-auto py-6">
        <div class="header flex flex-wrap justify-between items-center">
          <ul class="header-tabs flex">
            <li class="header-tabs__tab py-3 px-16">Dashboard</li>
            <li class="header-tabs__tab py-3 px-16">Homiylar</li>
            <li class="header-tabs__tab py-3 px-16">Talabalar</li>
          </ul>
          <div class="header-action flex flex-wrap">
            <div
              class="header-action__search flex p-3 rounded-md min-w-max mr-5"
            >
              <img class="pr-2" src="@/assets/search_1.svg" alt="" />
              <input
                v-model="searchText"
                class="w-48"
                type="text"
                placeholder="Izlash"
              />
            </div>
            <button
              class="flex items-center py-3 px-8"
              @click="$emit('getData', searchText)"
            >
              <img class="pr-3" src="@/assets/filter_1.svg" alt="" />
              Filter
            </button>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
export default class HeaderComponent extends Vue {
  searchText = "";
}
</script>

<style lang="scss" scoped>
.c-l-header {
  header {
    background: white;

    .header {
      &-tabs {
        &__tab {
          background: #3366ff;
          border: 2px solid #3366ff;
          color: white;
          cursor: pointer;

          &:first-child {
            background: white;
            border: 2px solid #e0e7ff;
            border-radius: 6px 0 0 6px;
            border-right: none;
            color: rgba(51, 102, 255, 0.6);
          }

          &:last-child {
            background: white;
            border: 2px solid #e0e7ff;
            border-radius: 0 6px 6px 0;
            border-left: none;
            color: rgba(51, 102, 255, 0.6);
          }
        }
      }

      &-action {
        &__search {
          background: #e8e8e8;

          img {
          }

          input {
            background: #e8e8e8;

            &:focus {
              outline: none;
            }
          }
        }

        button {
          background: #edf1fd;
          border-radius: 5px;
          color: #3365fc;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
