import Users from 'meteor/vulcan:users';
import SimpleSchema from 'simpl-schema';

const notificationsGroup = {
  name: 'notifications',
  order: 2,
};

Users.addField([
  /**
    Count of the user's posts
  */
  {
    fieldName: 'postCount',
    fieldSchema: {
      type: Number,
      optional: true,
      defaultValue: 0,
      canRead: ['guests'],
    },
  },
  /**
  The user's associated posts (GraphQL only)
*/
  {
    fieldName: 'posts',
    fieldSchema: {
      type: Object,
      optional: true,
      canRead: ['guests'],
      resolveAs: {
        arguments: 'limit: Int = 5',
        type: '[Post]',
        resolver: (user, { limit }, { currentUser, Users, Posts }) => {
          const posts = Posts.find({ userId: user._id }, { limit }).fetch();

          // restrict documents fields
          const viewablePosts = _.filter(posts, post =>
            Posts.checkAccess(currentUser, post)
          );
          const restrictedPosts = Users.restrictViewableFields(
            currentUser,
            Posts,
            viewablePosts
          );
          return restrictedPosts;
        },
      },
    },
  },
  /**
  User's bio (Markdown version)
*/
  {
    fieldName: 'bio',
    fieldSchema: {
      type: String,
      optional: true,
      input: 'textarea',
      canCreate: ['members'],
      canUpdate: ['members'],
      canRead: ['guests'],
      order: 30,
      searchable: true,
    },
  },
  /**
  User's bio (Markdown version)
*/
  {
    fieldName: 'htmlBio',
    fieldSchema: {
      type: String,
      optional: true,
      canRead: ['guests'],
    },
  },
  /**
  A link to the user's homepage
*/
  {
    fieldName: 'website',
    fieldSchema: {
      type: String,
      regEx: SimpleSchema.RegEx.Url,
      optional: true,
      input: 'text',
      canCreate: ['members'],
      canUpdate: ['members'],
      canRead: ['guests'],
      order: 50,
    },
  },
  // count of the user's comments
  {
    fieldName: 'commentCount',
    fieldSchema: {
      type: Number,
      optional: true,
      defaultValue: 0,
      canRead: ['guests'],
    },
  },
  // Add notifications options to user profile settings
  {
    fieldName: 'notifications_users',
    fieldSchema: {
      label: 'New users',
      type: Boolean,
      optional: true,
      defaultValue: false,
      input: 'checkbox',
      canRead: ['guests'],
      canCreate: ['admins'],
      canUpdate: ['admins'],
      group: notificationsGroup,
    },
  },
  {
    fieldName: 'notifications_posts',
    fieldSchema: {
      label: 'New posts',
      type: Boolean,
      optional: true,
      defaultValue: false,
      input: 'checkbox',
      canRead: ['guests'],
      canCreate: ['members'],
      canUpdate: ['members'],
      group: notificationsGroup,
    },
  },
  {
    fieldName: 'notifications_comments',
    fieldSchema: {
      label: 'Comments on my posts',
      type: Boolean,
      optional: true,
      defaultValue: false,
      input: 'checkbox',
      canRead: ['guests'],
      canCreate: ['members'],
      canUpdate: ['members'],
      group: notificationsGroup,
    },
  },
  {
    fieldName: 'notifications_replies',
    fieldSchema: {
      label: 'Replies to my comments',
      type: Boolean,
      optional: true,
      defaultValue: false,
      input: 'checkbox',
      canRead: ['guests'],
      canCreate: ['members'],
      canUpdate: ['members'],
      group: notificationsGroup,
    },
  },
]);
