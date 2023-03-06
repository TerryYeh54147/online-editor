<template>
  <v-card bordered>
    <v-card-section>
      <div class="text-h6 text-bold q-pt-sm">Context Comparator</div>
    </v-card-section>
    <v-card-section>
      <div class="row q-col-gutter-sm">
        <div class="col-4">
          <q-select v-model="mode" label="mode" :options="modes" />
        </div>
        <div class="col-4">
          <q-select v-model="theme" label="theme" :options="themes" />
        </div>
        <div class="col-4">
          <q-select v-model="language" label="language" :options="languages" />
        </div>
        <div class="col-6">
          <q-input type="textarea" v-model="prev" label="prev"></q-input>
        </div>
        <div class="col-6">
          <q-input type="textarea" v-model="current" label="current"></q-input>
        </div>
      </div>
      <div class="row">
        <div class="col-12"><q-separator spaced="xl" /></div>
      </div>
      <div class="row">
        <div class="col-12">
          <v-card class="q-pt-sm">
            <v-card-section>
              <CodeDiff
                :mode="mode"
                :theme="theme"
                :language="language"
                :prev="prev"
                :current="current"
            /></v-card-section>
          </v-card>
        </div>
      </div>

      <div class="row">
        <div class="col-12"><q-separator spaced="xl" /></div>
      </div>
      <div class="row">
        <div class="col-12">
          <v-card class="q-pt-sm">
            <v-card-section>
              <Codemirror v-model="prev" merge :options="diffOptions"
            /></v-card-section>
          </v-card>
        </div>
      </div>
    </v-card-section>
  </v-card>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue';

// CodeDiff
const mode = ref('split');
const theme = ref('dark');
const language = ref('js');
const prev = ref('');
const current = ref('');

const modes = ['split', 'unified'];
const themes = ['dark', 'light'];
const languages = [
  'css',
  'xml',
  'markdown',
  'javascript',
  'json',
  'plaintext',
  'typescript',
];
// codemirror
const diffOptions = reactive({
  autorefresh: true,
  value: current.value,
  orig: prev.value,
  connect: 'align',
  mode: language.value,
  theme: theme.value,
});
</script>
