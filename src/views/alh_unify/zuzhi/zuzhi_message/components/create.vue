<template>
    <div>
        <el-dialog :title="title" :visible.sync="visible" style="padding-bottom: 5vh" width="30%">
            <el-form ref="dataForm" :model="temp" label-position="left" label-width="auto" :rules="rules">
                <el-row>
                    <el-col :span="24">
                        <el-form-item label="岗位名称" prop="customerCode">
                            <el-input v-model="temp.customerCode" />
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="所属组织" prop="type1">
                            <el-select v-model="temp.type1" placeholder="请选择">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>

                    </el-col>
                </el-row>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="visible = false">取消</el-button>
                <el-button type="primary" @click="submitForm">确定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>

export default {
    data() {
        return {
            title: '新增岗位信息',
            visible: false,
            temp: {
                customerCode: '',
                customerName: '',
                dutyParagraph: '',
                type1: '',
                type2: '',
                type3: '',
                product: '',
            },
            options: [
                {
                    value: 0,
                    label: '营销部'
                },
                {
                    value: 1,
                    label: '行政部'
                },

            ],
            rules: {}
        }
    },
    methods: {
        show(val) {
            this.visible = true
        },
        submitForm() {
            this.$refs['dataForm'].validate((valid) => {
                if (valid) {
                    this.visible = false
                    this.$parent.getList()
                    this.$message({
                        type: 'success',
                        message: '操作成功'
                    })
                }
            })
        }
    }
}
</script>