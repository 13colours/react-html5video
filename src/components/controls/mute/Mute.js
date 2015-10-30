import React from 'react';
import Icon from './../../icon/icon';
import ProgressBar from './../../progressbar/progressbar';

var Mute = React.createClass({

    propTypes: {
        volume: React.PropTypes.number,
        unmute: React.PropTypes.func,
        setVolume: React.PropTypes.func,
        toggleMute: React.PropTypes.func,
        muted: React.PropTypes.bool
    },

    /**
     * As controls receive all props for extensibility, we do a quick
     * check and make sure only the props we care about have changed.
     * @param  {object} nextProps The next props from parent
     * @return {boolean}          Whether we re-render or not
     */
    shouldComponentUpdate(nextProps) {
        return this.props.muted !== nextProps.muted ||
               this.props.toggleMute !== nextProps.toggleMute ||
               this.props.volume !== nextProps.volume ||
               this.props.setVolume !== nextProps.setVolume ||
               this.props.unmute !== nextProps.unmute;
    },

    /**
     * Calculates the seek time based on click position and element offset.
     * @param  {object} e Event object
     * @return {undefined}
     */
    changeVolume(e) {
        this.props.setVolume(e.target.value / 100);
        this.props.unmute();
    },

    render() {
        return (
            <div className="video-mute video__control" >
                <div className="video-mute__inner" onClick={this.props.toggleMute}>
                    {this.props.muted ? <Icon name="volume-off" /> : <Icon name="volume-up" />}
                </div>
                <div className="video-mute__volume">
                    <div className="video-mute__track">
                        <ProgressBar
                            orientation="vertical"
                            onChange={this.changeVolume}
                            progress={this.props.volume * 100} />
                    </div>
                </div>
            </div>
        );
    }
});

export default Mute;
