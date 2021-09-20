"use strict"

class AlarmClock {
    constructor(){
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if (!id) {
            throw new Error('Не передан id');
        }

        if (this.alarmCollection.find(alarm => alarm.id === id)) {
            console.error('Уже существует');
            return;
        }

        this.alarmCollection.push({id, time, callback});
    }

    removeClock(id) {
        let index = this.alarmCollection.findIndex(alarm => alarm.id === id);
        return !!this.alarmCollection.splice(index, 1); 
    }

    getCurrentFormattedTime() {
        let hours = new Date().getHours();
        let minutes = new Date().getMinutes();

        if (hours < 10) {
            hours = '0' + hours;
        }

        if (minutes < 10) {
            minutes = '0'+ minutes;
        }

        return hours + ':' + minutes;
    }
    
    checkClock(alarm) {
        if (alarm.time === this.getCurrentFormattedTime()) {
            alarm.callback();
        }
    }

    start() {
        if (!this.timerId) {
            this.timerId = setInterval(() => {
                this.alarmCollection.some((alarm) => {
                    this.checkClock(alarm);
                });
            }, 1000);
        }
    }

    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        this.alarmCollection.forEach((alarm) => {
            console.log(`Номер №${alarm.id}, Время срабатывания ${alarm.time}`);
        });
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}

function testCase() {
    const clock = new AlarmClock();
    
    function addTime(time) {
        let now = new Date();
        now.setMinutes(now.getMinutes() + time);

        let hours = now.getHours();
        let minutes = now.getMinutes();

        if (hours < 10) {
            hours = '0' + hours;
        }

        if (minutes < 10) {
            minutes = '0'+ minutes;
        }

        return hours + ':' + minutes;
    } 

    clock.addClock(
        addTime(0), 
        () => console.log('Вставай!'),
        1
    );

    clock.addClock(
        addTime(0), 
        () => console.log('Вставай!'),
        1
    );

    clock.addClock(
        addTime(1), 
        () => {
            console.log('Подъём!');
            clock.removeClock(2);
        },
        2
    );

    clock.addClock(
        addTime(2), 
        () => {
            console.log('На работу опоздал!');
            clock.stop()
            clock.clearAlarms();
            clock.printAlarms();
        },
        3
    );

    clock.printAlarms();
    clock.start();
}

testCase();