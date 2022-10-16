import { Stack } from '@mui/material';
import React, { ReactNode } from 'react';
import { Text } from '../../atoms/text';
import { ListWrapper } from './style';
interface Props {
  title: string;
  items: {
    substitle: string;
    link?: ReactNode;
    description: string;
  }[];
}
function ListStepper({ title, items }: Props) {
  return (
    <ListWrapper>
      <div className="timeline education">
        <Text as="h4">{title}</Text>
        <div className="timeline-items">
          {items.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="item-title">
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Text as="h5">{item.substitle}</Text>
                  {item.link}
                </Stack>
              </div>
              <Text className="location">{item.description}</Text>
            </div>
          ))}
        </div>
      </div>
    </ListWrapper>
  );
}

export default ListStepper;
