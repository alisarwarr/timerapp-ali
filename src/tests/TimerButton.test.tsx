import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { TimerButton } from '../components';

describe('TimerButton', () => {
    let container: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

    beforeEach(() => {
        container = shallow(
            <TimerButton
                value={''}
                handleFunc={() => {}}
                disabled={false}
            />
        )
    })

    it('should render a <div/>', () => {
        expect(container.find('div').length).toBeGreaterThanOrEqual(1);
    })
})