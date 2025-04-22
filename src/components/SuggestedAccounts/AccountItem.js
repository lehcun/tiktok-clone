import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './SuggestedAccounts.module.scss';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem({ name }) {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };
    return (
        // Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context.
        <div>
            <Tippy interactive delay={[800, 0]} offset={[-20, 0]} render={renderPreview} placement="bottom">
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/21ebc48fbe1bad64deaed2126fc94211~tplv-tiktokx-cropcenter:100:100.jpeg?dr=14579&refresh_token=233aac0d&x-expires=1745380800&x-signature=2DvKiaONN0Kyo1Wf89sZCJl%2FUX4%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my"
                        alt=""
                    />

                    <div className={cx('item-info')}>
                        <h4 className={cx('nickname')}>
                            <strong>emPe</strong>
                            <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                        </h4>
                        <p className={cx('name')}>Em Pe</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {
    name: PropTypes.string,
};

export default AccountItem;
