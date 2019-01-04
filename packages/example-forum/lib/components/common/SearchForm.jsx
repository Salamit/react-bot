import { registerComponent, Components, Utils } from 'meteor/vulcan:core';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { intlShape } from 'meteor/vulcan:i18n';
import Formsy from 'formsy-react';
import FRC from 'formsy-react-components';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import queryString from 'querystring';

const Input = FRC.Input;

// see: http://stackoverflow.com/questions/1909441/jquery-keyup-delay
const delay = (function() {
  var timer = 0;
  return function(callback, ms) {
    clearTimeout(timer);
    timer = setTimeout(callback, ms);
  };
})();

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.state = {
      pathname: props.location.pathname,
      search: this.getQuery().query || ''
    };
  }

  getQuery = () => {
    return  queryString.parse(this.props.location.search);
  }

  // note: why do we need this?
  componentWillReceiveProps(nextProps) {
    this.setState({
      search: this.getQuery().query || ''
    });
  }

  search(data) {
    const router = this.props.router;
    const routerQuery = this.getQuery();
    delete routerQuery.query;

    const query =
      data.searchQuery === ''
        ? routerQuery
        : { ...routerQuery, query: data.searchQuery };

    delay(() => {
      // only update the route if the path hasn't changed in the meantime
      if (this.state.pathname === router.location.pathname) {
        router.push({
          pathname: Utils.getRoutePath('posts.list'),
          query: query
        });
      }
    }, 700);
  }

  render() {
    const resetQuery = this.getQuery();
    delete resetQuery.query;

    return (
      <div className="search-form">
        <Formsy.Form onChange={this.search}>
          <Input
            name="searchQuery"
            value={this.state.search}
            placeholder={this.context.intl.formatMessage({
              id: 'posts.search'
            })}
            type="text"
            layout="elementOnly"
          />
          {this.state.search !== '' ? (
            <Link
              className="search-form-reset"
              to={{ pathname: '/', query: resetQuery }}
            >
              <Components.Icon name="close" />
            </Link>
          ) : null}
        </Formsy.Form>
      </div>
    );
  }
}

SearchForm.contextTypes = {
  intl: intlShape
};

registerComponent({
  name: 'SearchForm',
  component: SearchForm,
  hocs: [withRouter]
});
