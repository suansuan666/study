<!-- 限制时间段： -->
  <el-date-picker
    v-model="form.time"
    type="datetimerange"
    range-separator="至"
    start-placeholder="开始日期"
    end-placeholder="结束日期"
    value-format="yyyy-MM-dd HH:MM:ss"
    :picker-options="pickerOption"
    >
  </el-date-picker>
  <!-- 只能选择今天以前的日期： -->
  pickerOption: {
    disabledDate(time) {
      return time.getTime() > Date.now() - 8.64e7 // 只能选择今天以前的日期
    }
  },
  <!-- 只能选择今天及今天的 -->
  pickerOption: {
    disabledDate(time) {
      return time.getTime() > Date.now() - 8.64e6 // 
    }
  },
  <!-- 限制最近一周的时间 -->
  time:[new Date(curDate.getTime() - 24 * 60 * 60 * 1000 * 30), new Date(curDate.getTime())],