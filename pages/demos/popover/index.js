import * as React from 'react';
import * as Popover from '@radix-ui/react-popover';

export default function Index() {
  return (
    <div className="p-24 bg-gray-100">
      <Popover.Root>
        <Popover.Trigger>More info</Popover.Trigger>
        <Popover.Portal>
          <Popover.Content>
            Some more info…
            <Popover.Arrow />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
}
