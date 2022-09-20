import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
    constructor(private powerService: PowerService) {}

    /**
 * compute
 */
    public compute(a: number, b: number) {
        console.log('Drawing 10 watts of power from Power Service');
        this.powerService.supplyPower(10);
        console.log(`Computing numbers. ${a} + ${b} = ${a + b}`);
        return a + b;
    }
}
