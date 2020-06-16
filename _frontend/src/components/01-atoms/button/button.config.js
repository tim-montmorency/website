module.exports = {
  title: 'Button',
  status: 'wip',
  variants: [
    {
      name: 'Primary',
      context: {
        text: 'Primary',
      },
    },
    {
      name: 'External',
      context: {
        text: 'External',
        href: '#',
        target: '_blank',
      },
    },
    {
      name: 'Icon only',
      context: {
        href: '#',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3A8.994 8.994 0 0013 3.06V1h-2v2.06A8.994 8.994 0 003.06 11H1v2h2.06A8.994 8.994 0 0011 20.94V23h2v-2.06A8.994 8.994 0 0020.94 13H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/></svg>',
      },
    },
    {
      name: 'Disabled',
      context: {
        text: 'Disabled',
        href: '#',
        disabled: true,
      },
    },
    {
      name: 'Secondary',
      context: {
        style: 'secondary',
        text: 'Secondary',
      },
    },
    {
      name: 'Secondary External',
      context: {
        style: 'secondary',
        text: 'External',
        href: '#',
        target: '_blank',
      },
    },
    {
      name: 'Secondary Icon only',
      context: {
        style: 'secondary',
        href: '#',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3A8.994 8.994 0 0013 3.06V1h-2v2.06A8.994 8.994 0 003.06 11H1v2h2.06A8.994 8.994 0 0011 20.94V23h2v-2.06A8.994 8.994 0 0020.94 13H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/></svg>',
      },
    },
    {
      name: 'Secondary Disabled',
      context: {
        style: 'secondary',
        text: 'Disabled',
        href: '#',
        disabled: true,
      },
    },
  ],
};
