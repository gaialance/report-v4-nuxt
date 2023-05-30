<template>
  <table class="w-100">
    <thead>
      <tr>
        <th>
          <slot name="title" />
          <WidgetExportmenu />
        </th>
      </tr>
    </thead>
    <tbody>
      <slot name="content" />
    </tbody>
  </table>
</template>

  <style>
    .icon{
        height: 20px;
        width: 20px;
    }
  </style>
