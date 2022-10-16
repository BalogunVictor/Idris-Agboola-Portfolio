import React from 'react';
import Moment from 'moment';
import { IBlog } from '../../../interface/blog';
import { BlogCardWrapper } from './style';
import { LinkStyled } from '../../atoms/link';
import { Text } from '../../atoms/text';

function BlogCard({
  description,
  title,
  published_timestamp,
  canonical_url,
}: IBlog) {
  const formatDate = Moment(published_timestamp).format('MMM Do YYYY');
  return (
    <LinkStyled href={`${canonical_url}`} color="accent">
      <BlogCardWrapper>
        <Text as="h4">{title}</Text>
        <Text>{description}</Text>
        <Text as="figcaption" className="timeformat">
          {formatDate}
        </Text>
      </BlogCardWrapper>
    </LinkStyled>
  );
}

export default BlogCard;
