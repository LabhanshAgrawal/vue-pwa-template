import Vue from 'vue'{{#if_eq tslintConfig "airbnb"}};{{/if_eq}}
import Component from 'vue-class-component'{{#if_eq tslintConfig "airbnb"}};{{/if_eq}}
import WithRender from './Hello.html?style=./Hello.css'{{#if_eq tslintConfig "airbnb"}};{{/if_eq}}

{{#if_eq tslintConfig "airbnb"}}import { Prop } from 'vue-property-decorator';
{{/if_eq}}{{#unless_eq tslintConfig "airbnb"}}import {Prop} from 'vue-property-decorator'
{{/unless_eq}}

@WithRender
@Component
export default class Hello extends Vue {
  {{#if_eq tslintConfig "airbnb"}}@Prop({ type: Boolean, default: true })
  {{/if_eq}}{{#unless_eq tslintConfig "airbnb"}}@Prop({type: Boolean, default: true})
  {{/unless_eq}}links: boolean{{#if_eq tslintConfig "airbnb"}};{{/if_eq}}

  {{#if_eq tslintConfig "airbnb"}}@Prop({ type: Boolean, default: true })
  {{/if_eq}}{{#unless_eq tslintConfig "airbnb"}}@Prop({type: Boolean, default: true})
  {{/unless_eq}}ecosystem: boolean{{#if_eq tslintConfig "airbnb"}};{{/if_eq}}

  msg = 'Welcome to Your Vue.js PWA'{{#if_eq tslintConfig "airbnb"}};{{/if_eq}}
}
