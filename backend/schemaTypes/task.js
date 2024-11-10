export const task = {
  name: 'task',
  title: 'Task',
  type: 'document',
  fields: [
    {name: 'name', title: 'Name', type: 'string'},
    {name: 'created_at', title: 'Created at', type: 'date'},
    {name: 'is_complete', title: 'Is complete', type: 'boolean', initialValue: 'false'},
    {name: 'priority', title: 'Priority', type: 'string'},
  ],
}

// TODO: priority to enum
